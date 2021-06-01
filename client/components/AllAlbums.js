import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAlbums } from '../redux/albums';
import { AlbumCard } from './';

const AllAlbums = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchAlbums());
    }

    return () => {
      isMounted = false;
    };
  }, []);

  const albums = useSelector((state) => state.albums);

  return (
    <div id="albums" className="row wrap">
      {albums.map((album) => (
        <Link key={album.id} to={`/albums/${album.id}`}>
          <AlbumCard album={album} />
        </Link>
      ))}
    </div>
  );
};

// class AllAlbums extends React.Component {
//   componentDidMount() {
//     this.props.loadAlbums();
//   }

//   render() {
//     console.log(this.props);
//   }
// }

// const mapState = (state) => ({
//   albums: state.albums,
// });

// const mapDispatch = (dispatch) => ({
//   loadAlbums: () => dispatch(fetchAlbums()),
// });

export default AllAlbums;
