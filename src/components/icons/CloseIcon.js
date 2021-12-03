import React from 'react';

const CloseIcon = (props) => {
  return (
    <svg
      width={props.size ?? 24}
      height={props.size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 11.2929L16.1464 7.14645C16.3417 6.95118 16.6583 6.95118 16.8536 7.14645C17.0488 7.34171 17.0488 7.65829 16.8536 7.85355L12.7071 12L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.6583 17.0488 16.3417 17.0488 16.1464 16.8536L12 12.7071L7.85355 16.8536C7.65829 17.0488 7.34171 17.0488 7.14645 16.8536C6.95118 16.6583 6.95118 16.3417 7.14645 16.1464L11.2929 12L7.14645 7.85355C6.95118 7.65829 6.95118 7.34171 7.14645 7.14645C7.34171 6.95118 7.65829 6.95118 7.85355 7.14645L12 11.2929Z"
        fill={props.color ?? '#111'}
      />
    </svg>
  );
};

export default CloseIcon;
