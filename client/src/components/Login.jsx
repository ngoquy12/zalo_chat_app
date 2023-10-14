import { Button, Input, notification } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import instance from "../api/api.config";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post("auth/login", user);
      console.log("response", response);
      if (response.data.status === 200) {
        localStorage.setItem("isLogin", JSON.stringify(response.data.data));
        notification.success({
          message: "Dang nhap thanh cong",
          description: response.data.message,
        });

        navigate("/chat");
      }
    } catch (error) {
      if (error.response.data.status === 400) {
        notification.error({
          message: "Canh bao",
          description: error.response.data.message,
        });
      }
    }
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-white h-[350px] p-7 rounded shadow-md w-96 border flex flex-col gap-3"
        >
          <h3 className="font-bold text-2xl text-center my-3">Đăng nhập</h3>
          <div>
            <label htmlFor="email">Email</label>
            <Input
              name="Email"
              className="mt-1"
              id="email"
              placeholder="Nhập địa chỉ email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Mật khẩu</label>
            <Input
              name="Password"
              className="mt-1"
              id="password"
              placeholder="Nhập mật khẩu"
              onChange={handleChange}
            />
          </div>

          <div className="mt-2">
            <Button
              htmlType="submit"
              className="bg-blue-600 w-full"
              type="primary"
            >
              Đăng nhập
            </Button>
          </div>
          <p className="text-center ">
            Bạn đã có tài khoản?{" "}
            <Link className="text-blue-600  " to="/register">
              Đăng ký
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
