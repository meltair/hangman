"use client";

import Header from "@/components/organisms/header";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type UserType = {
	id: number;
	email?: string;
	birthday?: number;
	username?: string;
};

const UserDetailTemplate = () => {
	const params = useParams();
	const router = useRouter();
	const [data, setData] = useState<UserType>({} as UserType);

	const getData = async () => {
		const response = await axios.get(
			`https://support.akbolat.net/api/users/${params.slug}`
		);

		if (response.status === 200) {
			setData(response.data);

			const res = await axios.put(
				`https://support.akbolat.net/api/users/${params.slug}`,
				
				{
					headers: {
						Authorization:
							"Bearer " + localStorage.getItem("token"),
					},
				}
			);

			setData(res.data.data);
		}
	};

	const deleteUser = async () => {
		const response = await axios.delete(
			`https://support.akbolat.net/api/users/${params.slug}`,
			{
				headers: {
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
			}
		);

		if (response.status === 200) {
			router.replace("/users");
		}
	};

	useEffect(() => {
		getData();
	}, [params.slug]);

	return (
		<div>
			{data?.id ? (
				<>
					<Header
						title={data.username ?? ""}
						description={`Kullanıcı detayı sayfası`}
					/>
					<h1>Ad: {data?.username}</h1>
					<div>
						E-posta: {data?.email} | Doğum Tarihi: {data?.birthday}
					</div>
					<p>Kullanıcı: {data?.username}</p>

					<div
						className="border border-amber-300 p-4 w-20 text-center"
						onClick={deleteUser}
					>
						Sil
					</div>
				</>
			) : null}
		</div>
	);
};

export default UserDetailTemplate;
