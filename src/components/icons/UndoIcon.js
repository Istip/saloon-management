import React from 'react';

const UndoIcon = (props) => {
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
        d="M12.5 22C7.25329 22 3 17.7467 3 12.5C3 7.25329 7.25329 3 12.5 3C17.7467 3 22 7.25329 22 12.5C22 17.7467 17.7467 22 12.5 22ZM12.5 21C17.1944 21 21 17.1944 21 12.5C21 7.80558 17.1944 4 12.5 4C7.80558 4 4 7.80558 4 12.5C4 17.1944 7.80558 21 12.5 21ZM17.5 12H8.70711L11.8536 8.85355C12.0488 8.65829 12.0488 8.34171 11.8536 8.14645C11.6583 7.95118 11.3417 7.95118 11.1464 8.14645L7.14645 12.1464C6.95118 12.3417 6.95118 12.6583 7.14645 12.8536L11.1464 16.8536C11.3417 17.0488 11.6583 17.0488 11.8536 16.8536C12.0488 16.6583 12.0488 16.3417 11.8536 16.1464L8.70711 13H17.5C17.7761 13 18 12.7761 18 12.5C18 12.2239 17.7761 12 17.5 12Z"
        fill={props.color ?? '#111'}
      />
    </svg>
  );
};

export default UndoIcon;
