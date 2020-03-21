import React from 'react';

export const Header = () => {
  const rand = Math.floor(Math.random() * 2 + 1);
  const icon = rand % 2 === 0 ? '🌙' : '💤';

  return (
    <h2 className="header">
      Restly.app<sup>
        <sup>{icon}</sup>
      </sup>
    </h2>
  );
};
