import React from "react";

export default function Profile() {
    // Dữ liệu cá nhân
    const user = {
        name: "Tuấn Võ Văn",
        age: 21,
        bio: "Sinh viên CNTT."
    };

    return (
        <div style={{ maxWidth: 400, margin: "50px auto", padding: 20, border: "1px solid #ccc", borderRadius: 10 }}>
            <img
                src="https://scontent.fsgn5-1.fna.fbcdn.net/v/t39.30808-6/480266540_1818872578870504_1513843071151530538_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFe100rwd_NLT0GNGX32hXG8QbJQgfk20TxBslCB-TbRLBZ5wbkIOUdgEVF-4LUdrSyCsiXi2kwZKRywLcZg7gc&_nc_ohc=zF8116hMFacQ7kNvwHaIm8w&_nc_oc=AdkZGT09SldCHBFlf7VKeiXN3kZn7GHcEmzfV7FiPRWNRydtk55BH7TkshHYegDpAqcaGlP-SQcvpo75cXz2tBA1&_nc_zt=23&_nc_ht=scontent.fsgn5-1.fna&_nc_gid=iY_HxsByJDcLBgILG_dhSg&oh=00_AfXIWNGAqNvaXgj2bXKZ0N74z8cOAx7FmcUzfsOnt8DRgQ&oe=68A9B0DE"
                alt="Avatar"
                style={{ display: "block", margin: "0 auto", borderRadius: "50%", width: 100, height: 100 }}
            />

            <h1 style={{ textAlign: "center" }}>Thông tin cá nhân</h1>
            <p><strong>Họ và tên:</strong> {user.name}</p>
            <p><strong>Tuổi:</strong> {user.age}</p>
            <p><strong>Giới thiệu:</strong> {user.bio}</p>
        </div>
    );
}
