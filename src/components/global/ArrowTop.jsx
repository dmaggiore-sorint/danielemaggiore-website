import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ArrowTop = ({ scroll }) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [canvas, setCanvas] = useState();
  const [ctx, setCtx] = useState();

  const onScroll = (e) => {
    setScrollPercentage(
      e.target.scrollTop / (e.target.scrollHeight - e.target.offsetHeight)
    );
  };

  useEffect(() => {
    setCanvas(document.querySelector('canvas'));
    setCtx(document.querySelector('canvas').getContext('2d'));
    const layout = document.querySelector('.layout');
    layout.addEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 10;
      ctx.strokeStyle = 'rgb(255, 77, 90)';
      ctx.beginPath();
      ctx.arc(
        50,
        50,
        45,
        -Math.PI / 2,
        Math.PI * 2 * scrollPercentage - Math.PI / 2
      );
      ctx.stroke();
    };
    draw();
  }, [scrollPercentage, canvas, ctx]);

  return (
    <button className="arrow-top" type="button" onClick={scroll}>
      <canvas width="100" height="100"></canvas>
      <div className="arrow-top__background"></div>
      <i className="fa-solid fa-arrow-up-long"></i>
    </button>
  );
};

ArrowTop.propTypes = {
  scroll: PropTypes.func.isRequired,
};

export default ArrowTop;
