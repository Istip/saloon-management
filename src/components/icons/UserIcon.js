import React from 'react';

const HomeIcon = (props) => {
  return (
    <svg
      width={props.size ?? 24}
      height={props.size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.71 12.7099C16.6904 11.9385 17.406 10.8808 17.7572 9.68382C18.1085 8.48684 18.0779 7.21015 17.6698 6.03135C17.2617 4.85255 16.4963 3.83027 15.4801 3.10674C14.4639 2.3832 13.2474 1.99438 12 1.99438C10.7525 1.99438 9.53611 2.3832 8.51993 3.10674C7.50374 3.83027 6.73834 4.85255 6.33021 6.03135C5.92208 7.21015 5.89151 8.48684 6.24276 9.68382C6.59401 10.8808 7.3096 11.9385 8.29 12.7099C6.61007 13.3829 5.14428 14.4992 4.04889 15.9398C2.95349 17.3804 2.26956 19.0912 2.07 20.8899C2.05555 21.0212 2.06711 21.1541 2.10402 21.2809C2.14093 21.4078 2.20246 21.5261 2.28511 21.6292C2.45202 21.8374 2.69478 21.9707 2.96 21.9999C3.22521 22.0291 3.49116 21.9517 3.69932 21.7848C3.90749 21.6179 4.04082 21.3751 4.07 21.1099C4.28958 19.1551 5.22168 17.3497 6.68822 16.0387C8.15475 14.7277 10.0529 14.0029 12.02 14.0029C13.9871 14.0029 15.8852 14.7277 17.3518 16.0387C18.8183 17.3497 19.7504 19.1551 19.97 21.1099C19.9972 21.3556 20.1144 21.5825 20.2991 21.7469C20.4838 21.9113 20.7228 22.0014 20.97 21.9999H21.08C21.3421 21.9697 21.5817 21.8372 21.7466 21.6311C21.9114 21.4251 21.9881 21.1622 21.96 20.8999C21.7595 19.0961 21.0719 17.3809 19.9708 15.9381C18.8698 14.4953 17.3969 13.3794 15.71 12.7099ZM12 11.9999C11.2089 11.9999 10.4355 11.7653 9.77772 11.3258C9.11992 10.8862 8.60723 10.2615 8.30448 9.53061C8.00173 8.79971 7.92251 7.99544 8.07686 7.21952C8.2312 6.4436 8.61216 5.73086 9.17157 5.17145C9.73098 4.61204 10.4437 4.23108 11.2196 4.07674C11.9956 3.9224 12.7998 4.00161 13.5307 4.30436C14.2616 4.60711 14.8863 5.1198 15.3259 5.7776C15.7654 6.4354 16 7.20876 16 7.99988C16 9.06075 15.5786 10.0782 14.8284 10.8283C14.0783 11.5785 13.0609 11.9999 12 11.9999Z"
        fill={props.color ?? '#111'}
      />
    </svg>
  );
};

export default HomeIcon;
