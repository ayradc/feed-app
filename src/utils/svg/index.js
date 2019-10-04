import React, {Fragment} from 'react'


export const LoadingSvg = () => {
    return (
        <Fragment>
        <div className="mx-auto h-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" stroke="#718096">
                <g fill="none" fillRule="evenodd" strokeWidth="2">
                    <circle cx="22" cy="22" r="19.7854">
                        <animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/>
                        <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="22" cy="22" r="14.9587">
                        <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/>
                        <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/>
                    </circle>
                </g>
            </svg>
        </div>
        </Fragment>
    )
}

export const DateSvg = () => {
    return (
        <Fragment>
        <svg className="w-4 fill-current text-gray-500 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" version="1.1"><path d="M 7.5 1 C 3.917969 1 1 3.917969 1 7.5 C 1 11.082031 3.917969 14 7.5 14 C 11.082031 14 14 11.082031 14 7.5 C 14 3.917969 11.082031 1 7.5 1 Z M 7.5 2 C 10.542969 2 13 4.457031 13 7.5 C 13 10.542969 10.542969 13 7.5 13 C 4.457031 13 2 10.542969 2 7.5 C 2 4.457031 4.457031 2 7.5 2 Z M 7 3 L 7 8 L 10 8 L 10 7 L 8 7 L 8 3 Z "/></svg>
        </Fragment>
    )
}

export const UpVoteSvg = () => {
    return (
        <Fragment>
        <svg
        className='w-4 fill-current text-gray-500'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
      >
        <path d='M7 10v8h6v-8h5l-8-8-8 8h5z' />
      </svg>
      </Fragment>
    )
}

export const DownVoteSvg = () => {
    return (
        <Fragment>
        <svg
        className='w-4 fill-current text-gray-500'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
      >
        <path d='M7 10V2h6v8h5l-8 8-8-8h5z' />
      </svg>
      </Fragment>
    )
}

export const ShareSvg = () => {
    return (
        <Fragment>
        <svg
        className='w-4 fill-current text-grey'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
      >
        <path d='M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z' />
      </svg>
      </Fragment>
    )
}

export const ErrorSvg = () => {
  return (
      <Fragment>
        <svg className='text-white fill-current h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M16.707,2.293C16.52,2.105,16.266,2,16,2H8C7.734,2,7.48,2.105,7.293,2.293l-5,5C2.105,7.48,2,7.734,2,8v8 c0,0.266,0.105,0.52,0.293,0.707l5,5C7.48,21.895,7.734,22,8,22h8c0.266,0,0.52-0.105,0.707-0.293l5-5 C21.895,16.52,22,16.266,22,16V8c0-0.266-0.105-0.52-0.293-0.707L16.707,2.293z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z"/>
        </svg> 
      </Fragment>
  )
}

export const SuccessSvg = () => {
  return (
      <Fragment>
        <svg className='text-white fill-current h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
          <path d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M10,17.414l-4.707-4.707 l1.414-1.414L10,14.586l7.293-7.293l1.414,1.414L10,17.414z"/>
        </svg>
      </Fragment>
  )
}

export const ExtLinkSvg = () => {
    return (
        <Fragment>
        <svg
        className='w-6 fill-current text-gray-600 mr-1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 32 32'
      >
        <path d='M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 5 Z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 Z' />
      </svg>
      </Fragment>
    )
}

export const RightArrowSvg = () => {
    return (
        <Fragment>
        <svg
        className='h-4 text-white fill-current inline-flex'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
      >
        <path d='M21.426,11.095l-17-8c-0.35-0.164-0.763-0.113-1.061,0.133C3.066,3.473,2.937,3.868,3.03,4.242l1.212,4.849L12,12	l-7.758,2.909L3.03,19.758c-0.094,0.374,0.036,0.77,0.335,1.015C3.548,20.923,3.772,21,4,21c0.145,0,0.29-0.031,0.426-0.095l17-8	C21.776,12.74,22,12.388,22,12S21.776,11.26,21.426,11.095z' />
      </svg>
      </Fragment>
    )
} 
