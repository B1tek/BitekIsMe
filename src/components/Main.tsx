import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLanyard } from "react-use-lanyard";
import { Presance } from "../types/lanyard";

const Wrapper = styled.main`
	text-align: center;
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: #32333a;
	color: #ffffff;
	font-size: 20px;
`;

const AvatarContainer = styled.div`
	margin-bottom: 10px;
	margin-top: 20px;
	padding: 25px;
	width: 20%;
	background-color: #24252a;
	border-radius: 25px;
	box-shadow: 8px 8px 24px rgba(0, 0, 0, 0.7);

	&:hover {
		-webkit-transform: scale(1.025);
		-moz-transform: scale(1.025);
		-o-transform: scale(1.025);
		-ms-transform: scale(1.025);
	}
`;

const LoadingContainer = styled.div`
	margin-bottom: 30px;
	margin-top: 30px;
	padding: 50px;
	background-color: #24252a;
	border-radius: 25px;
	box-shadow: 8px 8px 24px rgba(0, 0, 0, 0.7);
`;

const SpotifyContainer = styled.div`
	margin-left: 45px;
	margin-right: 45px;
	margin-bottom: 10px;
	margin-top: 10px;
	padding: 25px;
	background-color: #24252a;
	border-radius: 25px;
	box-shadow: 8px 8px 24px rgba(0, 0, 0, 0.7);

	&:hover {
		-webkit-transform: scale(1.025);
		-moz-transform: scale(1.025);
		-o-transform: scale(1.025);
		-ms-transform: scale(1.025);
	}
`;

const DiscordStatusContainer = styled.div`
	margin-bottom: 20px;
	margin-top: 10px;
	padding: 25px;
	width: 20%;
	background-color: #24252a;
	border-radius: 25px;
	box-shadow: 8px 8px 24px rgba(0, 0, 0, 0.7);

	&:hover {
		-webkit-transform: scale(1.025);
		-moz-transform: scale(1.025);
		-o-transform: scale(1.025);
		-ms-transform: scale(1.025);
	}
`;

const Avatar = styled.img`
	height: 150px;
	width: 150px;
	margin-bottom: 10px;
	border-radius: 20px;
	border: #32333a solid 4px;
`;

const DiscordAvatar = styled.div``;

const CustomStatus = styled.div``;

const AlbumImg = styled.img`
	height: 200px;
	width: 200px;
	margin-bottom: 10px;
	border-radius: 20px;
	border: #32333a 4px solid;
`;

const P = styled.p`
	margin-bottom: 15px;
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
				<LoadingContainer>
					<h1>Loading API...</h1>
				</LoadingContainer>
			</Wrapper>
		);

	const customStatus = presance.activities.find((el) => el.type === 4);

	return (
		<Wrapper>
			<AvatarContainer>
				<DiscordAvatar>
					<P>Discord Avatar:</P>
					<Avatar
						src={`https://cdn.discordapp.com/avatars/${presance.discord_user.id}/${presance.discord_user.avatar}.webp?size=4096`}
					/>
				</DiscordAvatar>
			</AvatarContainer>
			<SpotifyContainer>
				{presance.spotify && (
					<div>
						<AlbumImg src={presance.spotify.album_art_url} />
						<P>Listening to: {presance.spotify.song}</P>
						<P>Artist: {presance.spotify.artist.split(";").join()}</P>
					</div>
				)}
			</SpotifyContainer>
			<DiscordStatusContainer>
				<P>Discord Status: </P>
				{customStatus && <CustomStatus>{customStatus.state}</CustomStatus>}
			</DiscordStatusContainer>
		</Wrapper>
	);
};

export default Main;
