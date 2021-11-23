import React from 'react';

const SettingsIcon = (props) => {
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
        d="M18.671 5.60561L17.1871 5.90926C16.4473 5.27863 15.5984 4.78659 14.6806 4.46025L14.2024 3.02566C13.9982 2.41315 13.425 2 12.7794 2H11.2209C10.5752 2 10.002 2.41315 9.79786 3.02566L9.31966 4.46025C8.4018 4.78659 7.5529 5.27863 6.81309 5.90926L5.32925 5.60561C4.69671 5.47617 4.05231 5.76601 3.72949 6.32516L2.95025 7.67484C2.62742 8.23399 2.69861 8.93697 3.12698 9.42005L4.13089 10.5522C4.04414 11.0265 4.00012 11.5105 4.00012 12C4.00012 12.4895 4.04414 12.9735 4.13089 13.4478L3.12698 14.58C2.69861 15.063 2.62742 15.766 2.95025 16.3252L3.72949 17.6748C4.05231 18.234 4.69671 18.5238 5.32925 18.3944L6.81309 18.0907C7.5529 18.7214 8.4018 19.2134 9.31966 19.5397L9.79786 20.9743C10.002 21.5869 10.5752 22 11.2209 22H12.7794C13.425 22 13.9982 21.5869 14.2024 20.9743L14.6806 19.5397C15.5984 19.2134 16.4473 18.7214 17.1871 18.0907L18.671 18.3944C19.3035 18.5238 19.9479 18.234 20.2708 17.6748L21.05 16.3252C21.3728 15.766 21.3016 15.063 20.8733 14.58L19.8694 13.4478C19.9561 12.9735 20.0001 12.4895 20.0001 12C20.0001 11.5105 19.9561 11.0265 19.8694 10.5522L20.8733 9.42005C21.3016 8.93697 21.3728 8.23399 21.05 7.67484L20.2708 6.32516C19.9479 5.76601 19.3035 5.47617 18.671 5.60561ZM13.8106 5.01249C13.861 5.16388 13.9807 5.28209 14.1327 5.33066C15.0886 5.63604 15.9659 6.14494 16.7073 6.81895C16.8254 6.92629 16.9876 6.97082 17.1439 6.93884L18.8715 6.58531C19.0823 6.54216 19.2971 6.63878 19.4047 6.82516L20.184 8.17484C20.2916 8.36122 20.2678 8.59555 20.1251 8.75658L18.9563 10.0746C18.8506 10.1938 18.8081 10.3563 18.8418 10.512C18.9467 10.997 19.0001 11.4949 19.0001 12C19.0001 12.5051 18.9467 13.003 18.8418 13.488C18.8081 13.6437 18.8506 13.8062 18.9563 13.9254L20.1251 15.2434C20.2678 15.4044 20.2916 15.6388 20.184 15.8252L19.4047 17.1748C19.2971 17.3612 19.0823 17.4578 18.8715 17.4147L17.1439 17.0612C16.9876 17.0292 16.8254 17.0737 16.7073 17.181C15.9659 17.8551 15.0886 18.364 14.1327 18.6693C13.9807 18.7179 13.861 18.8361 13.8106 18.9875L13.2537 20.6581C13.1856 20.8623 12.9946 21 12.7794 21H11.2209C11.0057 21 10.8146 20.8623 10.7465 20.6581L10.1897 18.9875C10.1392 18.8361 10.0195 18.7179 9.86749 18.6693C8.9116 18.364 8.03435 17.8551 7.29295 17.181C7.17488 17.0737 7.01268 17.0292 6.85637 17.0612L5.12877 17.4147C4.91792 17.4578 4.70312 17.3612 4.59551 17.1748L3.81627 15.8252C3.70867 15.6388 3.73239 15.4044 3.87518 15.2434L5.0439 13.9254C5.14963 13.8062 5.19219 13.6437 5.15849 13.488C5.05354 13.003 5.00012 12.5051 5.00012 12C5.00012 11.4949 5.05354 10.997 5.15849 10.512C5.19219 10.3563 5.14963 10.1938 5.0439 10.0746L3.87518 8.75658C3.73239 8.59555 3.70867 8.36122 3.81627 8.17484L4.59551 6.82516C4.70312 6.63878 4.91792 6.54216 5.12877 6.58531L6.85637 6.93884C7.01268 6.97082 7.17488 6.92629 7.29295 6.81895C8.03435 6.14494 8.9116 5.63604 9.86749 5.33066C10.0195 5.28209 10.1392 5.16388 10.1897 5.01249L10.7465 3.34189C10.8146 3.13771 11.0057 3 11.2209 3H12.7794C12.9946 3 13.1856 3.13771 13.2537 3.34189L13.8106 5.01249ZM12.0001 16C9.79098 16 8.00012 14.2091 8.00012 12C8.00012 9.79086 9.79098 8 12.0001 8C14.2093 8 16.0001 9.79086 16.0001 12C16.0001 14.2091 14.2093 16 12.0001 16ZM15.0001 12C15.0001 13.6569 13.657 15 12.0001 15C10.3433 15 9.00012 13.6569 9.00012 12C9.00012 10.3431 10.3433 9 12.0001 9C13.657 9 15.0001 10.3431 15.0001 12Z"
        fill={props.color ?? '#111'}
      />
    </svg>
  );
};

export default SettingsIcon;