import React from "react";
import AtvImg from 'react-atv-img';

const imageDivStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: -1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(238, 239, 244, 1)',
};

export default class Image extends React.Component {
  render() {
    return (
      <div style={imageDivStyle}>
        <AtvImg
          layers={[
                  'public/images/ninjact.png',
                  'public/images/ninjact.png',
                  ]}
          staticFallback="public/images/ninjact.png"
          style={{ width: 500, height: 650 }}
        />
      </div>
    );
  }
}
