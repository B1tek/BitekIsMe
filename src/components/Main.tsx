import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLanyard } from "react-use-lanyard";
import { Presance } from "../types/lanyard";

const Wrapper = styled.main`
	text-align: center;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-image: linear-gradient(60deg, #9b2440, #9e6b1f);
	color: #ffffff;
	font-size: 25px;
`;

const Image = styled.img`
	height: 150px;
	width: 150px;
	margin-bottom: 10px;
	border-radius: 100%;
	border: #303138 solid 4px;
`;

const Image2 = styled.img`
	height: 200px;
	width: 200px;
	margin-bottom: 10px;
	border-radius: 20px;
	border: #303138 solid 4px;
`;

const P = styled.p`
	margin-bottom: 10px;
`;

const Main = () => {
	const [presance, setPresance] = useState<Presance | null>(null);
	const { loading, websocket } = useLanyard({
		userId: "529643065124585512",
		socket: true,
	});

	const handleMessage = (event: MessageEvent) => {
		const data = JSON.parse(event.data);

		switch (data.op) {
			case 0: {
				if (data.t === "INIT_STATE") {
					return setPresance(data.d);
				}

				if (data.t === "PRESENCE_UPDATE") {
					// @ts-ignore
					delete data.d.user_id;

					return setPresance(data.d);
				}

				break;
			}

			default: {
				break;
			}
		}
	};

	useEffect(() => {
		if (!websocket) return;

		websocket.addEventListener("message", handleMessage);

		return () => {
			websocket.close();
		};
	}, [websocket]);

	if (loading || !presance)
		return (
			<Wrapper>
				<h1>Loading API...</h1>
			</Wrapper>
		);

	const customStatus = presance.activities.find((el) => el.type === 4);

	return (
		<Wrapper>
			<div>
				<Image
					src={`https://cdn.discordapp.com/avatars/${presance.discord_user.id}/${presance.discord_user.avatar}.webp`}
				/>
			</div>
			<div>
				<P>{presance.kv.gender}</P>
			</div>
			{presance.spotify && (
				<div>
					<Image2 src={presance.spotify.album_art_url} />
					<P>Listening to: {presance.spotify.song}</P>
					<P>Artist: {presance.spotify.artist.split(";").join()}</P>
				</div>
			)}
			{customStatus && (
				<div>
					<P>Discord Status: {customStatus.state}</P>
				</div>
			)}
		</Wrapper>
	);
};

export default Main;
