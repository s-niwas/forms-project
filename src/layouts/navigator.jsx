import { useNavigate } from 'react-router-dom';


function Navigate_page(){
  const clicking=useNavigate();
const home_click=()=>{clicking('/home');}
const students_click=()=>{clicking('/students');}
const logout_click=()=>{clicking('/')}
    return(
<div>

<body class="font-poppins antialiased">
    <div
      id="view"
      class="h-full w-full flex flex-row"
      x-data="{ sidenav: true }"
    >
      <button
       // @click="sidenav = true"
        class="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
      >
        <svg
          class="w-5 h-5 fill-current"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      {/* md:w-60 lg:w-60  */}
      <div
        id="sidebar"
        class=" h-screen bg-nav_bg md:block shadow-xl px-3 w-screen overflow-x-hidden transition-transform duration-300 ease-in-out"
        x-show="sidenav"
        //@click.away="sidenav = false"
      >
        <div class="space-y-6 md:space-y-10 mt-3">
          {/* <h1 class="font-bold text-4xl text-center md:hidden">
            D<span class="text-teal-600">.</span>
          </h1> */}
          <h1 class="hidden md:block font-bold text-sm md:text-xl text-left">
          <span class="text-yellow-400"> l</span> Learning Portal
          </h1>
          <div id="profile" class="space-y-3">
            <img
            src={require('../photos/pic.png')}
            alt="user"
              class="w-28 md:w-28 h-28 rounded-full mx-auto"
            />
            <div>
              <h2
                class="font-medium text-xs md:text-sm text-center text-black">Niwas S</h2>
              <p class="text-xs text-user_color text-center">User</p>
            </div>
          </div>
          <div id="menu" class="flex flex-col space-y-4 text-center">
            <br></br>
            <a
              href="" onClick={home_click}
              class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
            >
              <svg class="fill-current inline-block" width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_59)">
<path d="M18.9172 7.30103L10.2458 0.264954C10.0351 0.0927576 9.77191 -0.00122833 9.50048 -0.00122833C9.22906 -0.00122833 8.96589 0.0927576 8.75516 0.264954L0.0837725 7.30103C0.0608651 7.31944 0.0418196 7.34225 0.0277417 7.36813C0.0136639 7.39401 0.00483431 7.42245 0.00176548 7.4518C-0.00130335 7.48115 0.00144976 7.51081 0.00986498 7.53908C0.0182802 7.56734 0.0321899 7.59365 0.0507864 7.61646L0.519189 8.19751C0.537803 8.22064 0.560764 8.23985 0.586759 8.25403C0.612754 8.26822 0.641273 8.27711 0.670684 8.2802C0.700095 8.28328 0.729822 8.2805 0.758164 8.27201C0.786505 8.26352 0.812906 8.24948 0.835856 8.23071L2.11143 7.19511V16.4681C2.11143 16.609 2.16703 16.7441 2.26601 16.8437C2.36499 16.9434 2.49923 16.9993 2.63921 16.9993H16.3614C16.5014 16.9993 16.6356 16.9434 16.7346 16.8437C16.8336 16.7441 16.8892 16.609 16.8892 16.4681V7.19843L18.1691 8.23735C18.2155 8.27518 18.2749 8.29292 18.3342 8.2867C18.3936 8.28047 18.4481 8.25079 18.4857 8.20415L18.9538 7.6231C18.9895 7.57477 19.0055 7.51459 18.9987 7.45478C18.9919 7.39497 18.9628 7.34 18.9172 7.30103V7.30103ZM7.91699 15.9368V10.6243H11.0837V15.9368H7.91699ZM15.8337 15.9368H12.1392V10.0931C12.1392 9.95218 12.0836 9.81706 11.9846 9.71743C11.8856 9.6178 11.7514 9.56183 11.6114 9.56183H7.38921C7.24923 9.56183 7.11499 9.6178 7.01601 9.71743C6.91703 9.81706 6.86143 9.95218 6.86143 10.0931V15.9368H3.16698V6.33847L9.35881 1.31152C9.39789 1.27931 9.44684 1.26171 9.49735 1.26171C9.54786 1.26171 9.59681 1.27931 9.63589 1.31152L15.8337 6.34112V15.9368Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1_59">
<rect width="19" height="17" fill="white"/>
</clipPath>
</defs>
</svg>

              <span class="place-content-center"> Home<span class="invisible">12345678</span></span>
            </a>
            <a
              href=""
              class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <svg class="fill-current inline-block" height="15"
              width="12"  viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_61)">
<path d="M1.5 0H10.5C11.3284 0 12 0.62959 12 1.40625V15L6 11.7188L0 15V1.40625C0 0.62959 0.671562 0 1.5 0ZM1 13.3678L6 10.6334L11 13.3678V1.40625C11 1.14779 10.7757 0.9375 10.5 0.9375H1.5C1.22431 0.9375 1 1.14779 1 1.40625V13.3678Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1_61">
<rect width="12" height="15" fill="white" transform="matrix(-1 0 0 1 12 0)"/>
</clipPath>
</defs>
</svg>

              <span class=""> Self Assesments</span>           
            </a>
            <a
            onClick={students_click}
              href=""
              class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <svg class="fill-current inline-block" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.13 4.81219L10.8488 2.13469C10.2922 1.955 9.70813 1.955 9.15156 2.13469L0.870313 4.81219C0.341875 4.98313 0 5.44938 0 6C0 6.55063 0.341875 7.01688 0.87 7.18781L1.79844 7.48781C1.69531 7.68094 1.61906 7.88875 1.56938 8.10656C1.23531 8.26844 1 8.60375 1 9C1 9.39781 1.23656 9.735 1.57281 9.89594L1.00875 13.3916C0.958437 13.7038 1.13094 14 1.36312 14H2.63656C2.86875 14 3.04156 13.7038 2.99094 13.3916L2.42719 9.89594C2.76344 9.735 3 9.39781 3 9C3 8.66875 2.82844 8.38938 2.58031 8.20719C2.62687 8.06156 2.69906 7.93031 2.78562 7.80688L4.45656 8.34719L4 12C4 13.1047 6.68625 14 10 14C13.3138 14 16 13.1047 16 12L15.5434 8.34719L19.13 7.1875C19.6581 7.01688 20 6.55063 20 6C20 5.44938 19.6581 4.98313 19.13 4.81219ZM14.9838 11.9331C14.6475 12.2872 12.9388 13 10 13C7.06125 13 5.3525 12.2872 5.01625 11.9331L5.42531 8.66031L9.15156 9.865C9.23281 9.89125 9.95531 10.1534 10.8488 9.865L14.575 8.66031L14.9838 11.9331ZM18.8213 6.23688L10.54 8.91438C10.1866 9.02875 9.81344 9.02875 9.46 8.91438L3.97031 7.13938L10.0919 5.99125C10.3634 5.94063 10.5422 5.67938 10.4913 5.40781C10.4406 5.13594 10.1737 4.95813 9.90812 5.00875L3.54 6.2025C3.1525 6.275 2.80531 6.44156 2.50625 6.66594L1.17844 6.23656C0.933125 6.15688 0.945312 5.83844 1.17844 5.76313L9.45969 3.08563C9.93156 2.93313 10.3297 3.01781 10.5397 3.08563L18.8209 5.76313C19.0519 5.83781 19.0681 6.15688 18.8213 6.23688Z" fill="black"/>
</svg>

              <span class=""> Students<span class="invisible">123451</span></span>
            </a>
            <a
              href=""
              class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <svg class="fill-current inline-block" width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.84933 8.32402L6.43862 7.65332C6.03348 7.54043 5.74888 7.1752 5.74888 6.7668C5.74888 6.25879 6.17745 5.84375 6.70312 5.84375H8.20982C8.58482 5.84375 8.94308 5.96328 9.23437 6.1791C9.34152 6.25879 9.48884 6.24551 9.58259 6.15254L9.96094 5.7707C10.0748 5.65781 10.0614 5.47188 9.93415 5.37227C9.44531 4.98711 8.84263 4.77793 8.20647 4.77793H8.03571V3.4498C8.03571 3.30371 7.91518 3.18418 7.76786 3.18418H7.23214C7.08482 3.18418 6.96429 3.30371 6.96429 3.4498V4.77793H6.70312C5.58817 4.77793 4.67745 5.66777 4.67745 6.76348C4.67745 7.64668 5.28348 8.43027 6.14732 8.67266L8.55804 9.34336C8.96317 9.45625 9.24777 9.82148 9.24777 10.2299C9.24777 10.7379 8.8192 11.1529 8.29353 11.1529H6.78683C6.41183 11.1529 6.05357 11.0334 5.76228 10.8176C5.65513 10.7379 5.50781 10.7512 5.41406 10.8441L5.03571 11.226C4.92187 11.3389 4.93527 11.5248 5.0625 11.6244C5.55134 12.0096 6.15402 12.2188 6.79018 12.2188H6.96429V13.5469C6.96429 13.693 7.08482 13.8125 7.23214 13.8125H7.76786C7.91518 13.8125 8.03571 13.693 8.03571 13.5469V12.2188H8.29688C9.41183 12.2188 10.3225 11.3289 10.3225 10.2332C10.3192 9.35 9.71652 8.56641 8.84933 8.32402ZM13.3929 1.0625H1.60714C0.719866 1.0625 0 1.77637 0 2.65625V14.3438C0 15.2236 0.719866 15.9375 1.60714 15.9375H13.3929C14.2801 15.9375 15 15.2236 15 14.3438V2.65625C15 1.77637 14.2801 1.0625 13.3929 1.0625ZM13.9286 14.3438C13.9286 14.6359 13.6875 14.875 13.3929 14.875H1.60714C1.3125 14.875 1.07143 14.6359 1.07143 14.3438V2.65625C1.07143 2.36406 1.3125 2.125 1.60714 2.125H13.3929C13.6875 2.125 13.9286 2.36406 13.9286 2.65625V14.3438Z" fill="black"/>
</svg>

              <span class=""> Payment<span class="invisible">123456</span></span>
            </a>
            <a
              href=""
              class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <svg class="fill-current inline-block" width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_53)">
<path d="M4.60417 10.625H4.0625C3.91354 10.625 3.79167 10.7445 3.79167 10.8906V14.0781C3.79167 14.2242 3.91354 14.3438 4.0625 14.3438H4.60417C4.75313 14.3438 4.875 14.2242 4.875 14.0781V10.8906C4.875 10.7445 4.75313 10.625 4.60417 10.625ZM6.77083 7.4375H6.22917C6.08021 7.4375 5.95833 7.55703 5.95833 7.70312V14.0781C5.95833 14.2242 6.08021 14.3438 6.22917 14.3438H6.77083C6.91979 14.3438 7.04167 14.2242 7.04167 14.0781V7.70312C7.04167 7.55703 6.91979 7.4375 6.77083 7.4375ZM8.125 9.82812V14.0781C8.125 14.2242 8.24688 14.3438 8.39583 14.3438H8.9375C9.08646 14.3438 9.20833 14.2242 9.20833 14.0781V9.82812C9.20833 9.68203 9.08646 9.5625 8.9375 9.5625H8.39583C8.24688 9.5625 8.125 9.68203 8.125 9.82812ZM12.5227 3.25324L9.68297 0.468164C9.37828 0.169336 8.96526 0 8.53565 0H1.62466C0.727865 0.00332031 0 0.717188 0 1.59674V15.4066C0 16.2861 0.727865 17 1.62466 17H11.3753C12.2721 17 13 16.2861 13 15.4066V4.38182C13 3.96047 12.8273 3.55207 12.5227 3.25324ZM8.66768 1.08209C8.76247 1.10533 8.84711 1.15182 8.9182 1.22154L11.7579 4.00662C11.829 4.07635 11.8764 4.15936 11.9001 4.25232H8.66768V1.08209ZM11.917 15.4066C11.917 15.6988 11.6733 15.9378 11.3753 15.9378H1.62466C1.32674 15.9378 1.08299 15.6988 1.08299 15.4066V1.59674C1.08299 1.30455 1.32674 1.0625 1.62466 1.0625H7.58435V4.51795C7.58435 4.95955 7.94659 5.3125 8.39685 5.3125H11.917V15.4066Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1_53">
<rect width="13" height="17" fill="white"/>
</clipPath>
</defs>
</svg>

              <span class=""> Report<span class="invisible">12345671</span></span>
            </a>
            <a
              href=""
              class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <svg class="fill-current inline-block" width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3929 1.0625H1.60714C0.719866 1.0625 0 1.77637 0 2.65625V14.3438C0 15.2236 0.719866 15.9375 1.60714 15.9375H13.3929C14.2801 15.9375 15 15.2236 15 14.3438V2.65625C15 1.77637 14.2801 1.0625 13.3929 1.0625ZM13.9286 14.3438C13.9286 14.6359 13.6875 14.875 13.3929 14.875H1.60714C1.3125 14.875 1.07143 14.6359 1.07143 14.3438V2.65625C1.07143 2.36406 1.3125 2.125 1.60714 2.125H13.3929C13.6875 2.125 13.9286 2.36406 13.9286 2.65625V14.3438ZM6.69643 5.3125H5.35714V4.25C5.35714 4.03086 5.17634 3.85156 4.95536 3.85156H4.6875C4.46652 3.85156 4.28571 4.03086 4.28571 4.25V5.3125H2.94643C2.50446 5.3125 2.14286 5.67109 2.14286 6.10938V7.70312C2.14286 8.14141 2.50446 8.5 2.94643 8.5H4.28571V12.3516C4.28571 12.5707 4.46652 12.75 4.6875 12.75H4.95536C5.17634 12.75 5.35714 12.5707 5.35714 12.3516V8.5H6.69643C7.13839 8.5 7.5 8.14141 7.5 7.70312V6.10938C7.5 5.67109 7.13839 5.3125 6.69643 5.3125ZM6.42857 7.4375H3.21429V6.375H6.42857V7.4375ZM12.0536 8.5H10.7143V4.25C10.7143 4.03086 10.5335 3.85156 10.3125 3.85156H10.0446C9.82366 3.85156 9.64286 4.03086 9.64286 4.25V8.5H8.30357C7.86161 8.5 7.5 8.85859 7.5 9.29688V10.8906C7.5 11.3289 7.86161 11.6875 8.30357 11.6875H9.64286V12.3516C9.64286 12.5707 9.82366 12.75 10.0446 12.75H10.3125C10.5335 12.75 10.7143 12.5707 10.7143 12.3516V11.6875H12.0536C12.4955 11.6875 12.8571 11.3289 12.8571 10.8906V9.29688C12.8571 8.85859 12.4955 8.5 12.0536 8.5ZM11.7857 10.625H8.57143V9.5625H11.7857V10.625Z" fill="black"/>
</svg>

              <span class=""> Settings<span class="invisible">123456</span></span>
            </a>
            <br></br>
            <br></br>
            <br></br>
            <a onClick={logout_click}
              href=""
              class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              
              <span >Logout<span class="invisible">123</span></span>
              <svg class="fill-current inline-block"width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.3125 7.2084C5.3125 6.91621 5.55156 6.67715 5.84375 6.67715H10.625V3.55937C10.625 3.32363 10.9105 3.2041 11.0766 3.37012L15.7781 8.12148C15.9873 8.33066 15.9873 8.66602 15.7781 8.8752L11.0766 13.6266C10.9105 13.7926 10.625 13.6764 10.625 13.4373V10.3195H5.84375C5.55156 10.3195 5.3125 10.0805 5.3125 9.78828V7.2084ZM4.25 7.2084V9.78828C4.25 10.6682 4.96387 11.382 5.84375 11.382H9.5625V13.4373C9.5625 14.616 10.9902 15.2137 11.827 14.377L16.5318 9.62891C17.1561 9.00469 17.1561 7.99531 16.5318 7.37109L11.827 2.61973C10.9936 1.78633 9.5625 2.37734 9.5625 3.55937V5.61465H5.84375C4.96387 5.61465 4.25 6.33184 4.25 7.2084ZM0 3.71875V13.2812C0 14.1611 0.713867 14.875 1.59375 14.875H5.97656C6.1957 14.875 6.375 14.6957 6.375 14.4766V14.2109C6.375 13.9918 6.1957 13.8125 5.97656 13.8125H1.59375C1.30156 13.8125 1.0625 13.5734 1.0625 13.2812V3.71875C1.0625 3.42656 1.30156 3.1875 1.59375 3.1875H5.97656C6.1957 3.1875 6.375 3.0082 6.375 2.78906V2.52344C6.375 2.3043 6.1957 2.125 5.97656 2.125H1.59375C0.713867 2.125 0 2.83887 0 3.71875Z" fill="black"/>
</svg>

            </a>
            
          </div>
        </div>
      </div>
     
    </div>
  </body>
  </div>
    )
}

export default Navigate_page;