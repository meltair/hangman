"use client";

import Header from "@/components/organisms/header";
import React, { useEffect, useState } from "react";

const HeaderAny = Header as any;

const UserCard: React.FC<{ id?: number; username?: string; birthday?: string; email?: string; createdAt?: string }> = ({
	id,
	username,
	birthday,
	email,
	createdAt
}) => {
	return (
		<div className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-2">
			<div className="flex items-center justify-between">
				<h3 className="text-sm text-gray-500">ID</h3>
				<span className="text-xs text-gray-400">{id}</span>
			</div>
			<h3 className="text-lg font-semibold text-gray-800">{username}</h3>
			<div className="text-sm text-gray-600">{email}</div>
			{birthday ? (
				<div className="text-sm text-gray-500">Doğum: {birthday}</div>
			) : null}
			<div className="text-sm text-gray-500">Üyelik Tarihi: {createdAt}</div>
		</div>
	);
};

const UserTemplate: React.FC = () => {
	const [users, setUser] = useState<
		Array<{ id?: number; username?: string; birthday?: string; email?: string ; createdAt?: string }>
	>([]);
	const getUserData = () => {
		const userData = localStorage.getItem("user");

		if (userData) {
			try {
				const parsed = JSON.parse(userData);
				// Ensure we always set an array. If a single user object is stored,
				// wrap it in an array so `.map` works reliably.
				if (Array.isArray(parsed)) {
					setUser(parsed);
				} else if (parsed) {
					setUser([parsed]);
				} else {
					setUser([]);
				}
			} catch (e) {
				console.error("Failed to parse user from localStorage", e);
				setUser([]);
			}
		} else {
			setUser([]);
		}
	};

	useEffect(() => {
		getUserData();
	}, []);

	console.log("---", users);

	return (
		<div className="flex items-center justify-center p-6">
			<div className="w-full max-w-3xl">
				{users && users.length > 0 ? (
					<HeaderAny
						username={users[0]?.username}
						description={`Kullanıcı listesi (${users.length})`}
					/>
				) : (
					<HeaderAny username={"Kullanıcılar"} description={"Kullanıcı bilgileri"} />
				)}
				<div className="mt-6 grid gap-4">
					{users.length === 0 ? (
						<div className="bg-white shadow-md rounded-lg p-6 text-center text-gray-600">
							Kullanıcı bulunamadı.
						</div>
					) : (
						users.map((item) => (
							<UserCard
								key={item.id ?? item.username}
								id={item.id}
								username={item.username}
								email={item.email}
								birthday={item.birthday}
								createdAt={item.createdAt}
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default UserTemplate;
