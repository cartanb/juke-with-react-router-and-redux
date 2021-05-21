import React from 'react';
import { connect } from 'react-redux';
import { AUDIO } from '../AUDIO';
import PlayPauseBtn from './PlayPauseBtn';

const SingleSong = ({ trackNumber, song, currentSong }) => {
	const { name, artist, genre } = song;

	const isSelected = !currentSong.id || currentSong.id === song.id;
	const isActiveSong = isSelected && !AUDIO.paused;

	return (
		<tr className={isActiveSong ? 'active' : ''}>
			<td>
				{/* song prop used to compare against currentSong and conditionally render single song play/pause btn icons */}
				<PlayPauseBtn song={song} />
			</td>
			<td>{trackNumber}</td>
			<td>{name}</td>
			<td>{artist.name}</td>
			<td>{genre}</td>
		</tr>
	);
};

const mapState = state => ({
	currentSong: state.currentSong,
});

export default connect(mapState)(SingleSong);
