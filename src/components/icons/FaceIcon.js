import React from 'react';

const FaceIcon = (props) => {
  return (
    <svg
      width={props.size ?? 24}
      height={props.size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 3.5C8 3.22386 7.77614 3 7.5 3H5.5C4.11929 3 3 4.11929 3 5.5V7.53113C3 7.80727 3.22386 8.03113 3.5 8.03113C3.77614 8.03113 4 7.80727 4 7.53113V5.5C4 4.67157 4.67157 4 5.5 4H7.5C7.77614 4 8 3.77614 8 3.5ZM16 3.5C16 3.77614 16.2239 4 16.5 4H18.5C19.3284 4 20 4.67157 20 5.5V7.5C20 7.77614 20.2239 8 20.5 8C20.7761 8 21 7.77614 21 7.5V5.5C21 4.11929 19.8807 3 18.5 3H16.5C16.2239 3 16 3.22386 16 3.5ZM20 16.5C20 16.2239 20.2239 16 20.5 16C20.7761 16 21 16.2239 21 16.5V18.5C21 19.8807 19.8807 21 18.5 21H16.5C16.2239 21 16 20.7761 16 20.5C16 20.2239 16.2239 20 16.5 20H18.5C19.3284 20 20 19.3284 20 18.5V16.5ZM3.5 16C3.22386 16 3 16.2239 3 16.5V18.5C3 19.8807 4.11929 21 5.5 21H7.5C7.77614 21 8 20.7761 8 20.5C8 20.2239 7.77614 20 7.5 20H5.5C4.67157 20 4 19.3284 4 18.5V16.5C4 16.2239 3.77614 16 3.5 16ZM8 8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V8.5ZM16.5 8C16.2239 8 16 8.22386 16 8.5V9.5C16 9.77614 16.2239 10 16.5 10C16.7761 10 17 9.77614 17 9.5V8.5C17 8.22386 16.7761 8 16.5 8ZM12 8.5C12 8.22386 12.2239 8 12.5 8C12.7761 8 13 8.22386 13 8.5V12.5C13 13.3284 12.3284 14 11.5 14C11.2239 14 11 13.7761 11 13.5C11 13.2239 11.2239 13 11.5 13C11.7761 13 12 12.7761 12 12.5V8.5ZM8.2 15.1C7.97909 15.2657 7.93431 15.5791 8.1 15.8C9.18903 17.252 10.498 18 12 18C13.502 18 14.811 17.252 15.9 15.8C16.0657 15.5791 16.0209 15.2657 15.8 15.1C15.5791 14.9343 15.2657 14.9791 15.1 15.2C14.189 16.4146 13.1646 17 12 17C10.8354 17 9.81097 16.4146 8.9 15.2C8.73431 14.9791 8.42091 14.9343 8.2 15.1Z"
        fill={props.color ?? '#111'}
      />
    </svg>
  );
};

export default FaceIcon;
