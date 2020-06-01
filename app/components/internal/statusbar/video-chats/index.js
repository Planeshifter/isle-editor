// MODULES //

import React, { Component } from 'react';
import { SessionContext } from 'session';
import { VIDEO_CHAT_STARTED, VIDEO_CHAT_ENDED } from 'constants/events.js';
import VideoChat from './video_chat.js';


// MAIN //

class VideoChats extends Component {
	constructor( props ) {
		super( props );
	}

	componentDidMount() {
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type ) => {
			if ( type === VIDEO_CHAT_STARTED || type === VIDEO_CHAT_ENDED ) {
				this.forceUpdate();
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		const session = this.context;
		return session.videoChats.map( ( chat ) => {
			return (
				<VideoChat
					key={chat.name}
					roomName={chat.name}
					roomSubject={chat.subject || chat.name}
				/>
			);
		});
	}
}


// TYPES //

VideoChats.contextType = SessionContext;


// EXPORTS //

export default VideoChats;
