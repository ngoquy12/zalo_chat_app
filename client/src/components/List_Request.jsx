import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Input, Modal, notification } from "antd";
import instance from "../api/api.config";
import { UserAddOutlined } from "@ant-design/icons";

export default function List_Request() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const userLocal = JSON.parse(localStorage.getItem("isLogin"));

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Tạo phòng
  const handleAddRoom = () => {
    instance
      .post("rooms", {
        RoomName: roomName,
        CreatedByUserId: userLocal.UserId,
      })
      .then((res) => {
        if (res.data.status === 201) {
          // Hiẻn thị thông báo
          notification.success({
            message: "Thành công",
            description: res.data.message,
          });
          // Chuyển sang trang chat
          navigate("/chat");
        }
      })
      .catch((err) => {
        if (err.response.data.status === 400) {
          setError(err.response.data.message);
        }
      });
  };

  return (
    <>
      {/* Modal tạo phòng */}

      <Modal
        title="Tạo phòng"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Input
          status={error ? "error" : ""}
          onChange={(e) => setRoomName(e.target.value)}
          value={roomName}
          placeholder="Nhập tên phòng..."
        />
        <p className="mt-1 text-red-500">{error}</p>
        <div className="flex justify-end gap-3 mt-3 p-0">
          <Button onClick={handleCancel}>Hủy</Button>
          <Button
            onClick={handleAddRoom}
            className="bg-blue-600"
            type="primary"
          >
            Tạo
          </Button>
        </div>
      </Modal>

      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-80 border">
          <div className="p-2 flex justify-center">
            <Button onClick={showModal} className="bg-blue-600" type="primary">
              Tạo phòng
            </Button>
          </div>
          <hr />
          <h3 className="text-center py-3 border">Danh sách gợi ý</h3>
          <ul className="flex flex-col">
            <li className="flex items-center justify-between p-3 hover:bg-[#E9F2FD] cursor-pointer">
              <div className="flex items-center gap-3">
                <img
                  className="h-12 rounded-full"
                  src="https://s75-ava-talk.zadn.vn/f/2/a/9/1/75/e6f993810f8dbba14a84b382dc473dbb.jpg"
                  alt=""
                />
                <span>Nguyễn Văn A</span>
              </div>
              <UserAddOutlined />
            </li>
            <li className="flex items-center justify-between p-3 hover:bg-[#E9F2FD] cursor-pointer">
              <div className="flex items-center gap-3">
                <img
                  className="h-12 rounded-full"
                  src="https://s75-ava-talk.zadn.vn/f/2/a/9/1/75/e6f993810f8dbba14a84b382dc473dbb.jpg"
                  alt=""
                />
                <span>Nguyễn Văn A</span>
              </div>
              <UserAddOutlined />
            </li>
          </ul>
        </div>
        <div className="w-full h-screen bg-slate-200">
          <h3 className="px-10 py-3 bg-white">Lời mời kết bạn(3)</h3>
          <hr />
          <div className="flex flex-wrap gap-4 p-8 ">
            <div className="bg-white rounded-md p-2 w-80">
              <div className="flex gap-2 items-center mb-3">
                <img
                  className="h-14 w-14 rounded-full"
                  src="https://s75-ava-talk.zadn.vn/f/2/a/9/1/75/e6f993810f8dbba14a84b382dc473dbb.jpg"
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="font-semibold">{}</span>
                  <span className="text-sm">Người mới quen</span>
                </div>
              </div>
              <div className="border px-3 py-4 mb-3">
                Xin chào bạn, mình là An. Kết bạn nha
              </div>
              <div className="flex justify-center gap-3">
                <Button>Từ chối</Button>
                <Button className="bg-blue-600" type="primary">
                  Đồng ý
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
