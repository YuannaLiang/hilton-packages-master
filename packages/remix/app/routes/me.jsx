import store from 'store'
import { useNavigate } from "react-router-dom"

export default function Me () {
	const navigate = useNavigate()
	const currentUserStore = store.get('currentUser')
	const logout = () => {
		navigate('/login')
		if (currentUserStore) {
			store.remove('currentUser')
		}
	}
	return (
		<div className="p-3">
			<div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<div className="flex flex-col items-center pb-10 pt-6">
					<div className="bg-black w-24 h-24 mb-3 rounded-full shadow-lg">
						<svg width="96" height="96" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_601_152)">
								<path d="M20.1624 29.7859C19.6495 29.6477 19.1219 29.9445 18.9718 30.4509L18.9652 30.4744L17.637 35.3963L17.6309 35.42C17.5059 35.9331 17.8126 36.4552 18.3255 36.5935C18.8383 36.732 19.3659 36.4351 19.5161 35.9287L19.5227 35.9052L20.8508 30.9833L20.8569 30.9595C20.8659 30.9225 20.8727 30.8853 20.8773 30.8483L20.8812 30.8113L20.8498 30.6518L20.8038 30.4222L20.7747 30.2788C20.7125 30.1587 20.6259 30.0528 20.5205 29.9679C20.4151 29.8831 20.2931 29.821 20.1624 29.7859ZM10.9077 24.7172C10.8834 24.7655 10.8629 24.8164 10.8466 24.8696L10.8373 24.9018L9.50921 29.8237L9.50312 29.8474C9.37812 30.3605 9.68476 30.8826 10.1977 31.0209C10.7105 31.1594 11.2381 30.8625 11.3883 30.3561L11.3948 30.3326L12.5991 25.8697C11.9684 25.5358 11.4023 25.1504 10.9077 24.7172ZM7.74054 19.0572C7.22765 18.9188 6.69999 19.2156 6.54992 19.722L6.54328 19.7455L5.21515 24.6674L5.20906 24.6912C5.08406 25.2043 5.3907 25.7263 5.90359 25.8647C6.4164 26.0031 6.94406 25.7063 7.09421 25.1998L7.10078 25.1763L8.4289 20.2545L8.435 20.2307C8.56 19.7176 8.25343 19.1955 7.74054 19.0572ZM37.5204 17.9395C37.0075 17.801 36.4798 18.0979 36.3298 18.6043L36.3231 18.6278L34.995 23.5497L34.9889 23.5734C34.8639 24.0866 35.1705 24.6086 35.6834 24.747C36.1963 24.8854 36.7239 24.5885 36.8741 24.0821L36.8806 24.0586L38.2088 19.1367L38.2148 19.113C38.3398 18.5998 38.0333 18.0778 37.5204 17.9395ZM4.8482 11.367C3.73593 13.3926 3.02769 15.6149 2.76281 17.9105C2.88951 18.055 3.05619 18.1587 3.24179 18.2084C3.75468 18.3469 4.28234 18.05 4.43242 17.5436L4.43906 17.5201L5.76718 12.5982L5.77328 12.5745C5.89828 12.0613 5.59163 11.5393 5.07874 11.4009C5.00352 11.3806 4.92608 11.3693 4.8482 11.367ZM34.1564 11.4009C33.6436 11.2625 33.1159 11.5594 32.9658 12.0658L32.9592 12.0893L31.6311 17.0112L31.625 17.0349C31.5 17.548 31.8066 18.0701 32.3195 18.2084C32.8323 18.3469 33.36 18.05 33.5102 17.5436L33.5167 17.5201L34.8448 12.5982L34.8509 12.5745C34.9759 12.0613 34.6693 11.5393 34.1564 11.4009Z" fill="white"/>
								<path d="M10.6282 6.72088C10.1154 6.58244 9.58777 6.87932 9.43762 7.38572L9.43105 7.40924L8.10293 12.3311L8.09683 12.3549C7.97183 12.868 8.27847 13.39 8.79137 13.5284C9.30418 13.6668 9.83183 13.3699 9.98199 12.8635L9.98855 12.84L11.3167 7.91815L11.3228 7.8944C11.4478 7.38127 11.1411 6.85924 10.6282 6.72088ZM27.6932 7.65127C27.1804 7.51283 26.6527 7.80971 26.5026 8.31611L26.496 8.33963L25.6036 11.6467C26.1817 11.9322 26.7334 12.2684 27.2523 12.6512L27.3382 12.7153L28.3816 8.84854L28.3877 8.82479C28.5127 8.31166 28.2061 7.78963 27.6932 7.65127ZM19.0069 2.1019C18.3839 2.15695 17.7641 2.24452 17.1502 2.36424L17.02 2.39018L15.7821 6.97893L15.776 7.00268C15.651 7.5158 15.9576 8.03783 16.4705 8.17619C16.9833 8.31463 17.511 8.01775 17.6611 7.51135L17.6677 7.48783L18.9958 2.56596L19.0019 2.54221C19.0373 2.39776 19.039 2.24712 19.0069 2.1019ZM31.2279 5.50174L30.967 6.46893L30.9609 6.4926C30.8359 7.00572 31.1425 7.52776 31.6554 7.66611C32.1682 7.80455 32.6959 7.50768 32.8461 7.00127L32.8526 6.97776L32.8811 6.87283C32.3927 6.41608 31.8793 5.9868 31.3432 5.58697L31.2279 5.50174ZM23.5007 2.26237L23.0296 4.00791L23.0236 4.03166C22.8986 4.54479 23.2053 5.06682 23.7182 5.20518C24.231 5.34362 24.7586 5.04674 24.9088 4.54033L24.9154 4.51682L25.4111 2.67955C24.8277 2.51824 24.2364 2.38669 23.6396 2.28541L23.5007 2.26237Z" fill="white"/>
								<path d="M13.5322 32.8337C13.6823 32.3274 14.21 32.0305 14.7229 32.1688C15.2358 32.3071 15.5423 32.8292 15.4173 33.3424L15.4112 33.3661L14.4607 36.8885L14.3279 36.8396C13.7556 36.6259 13.1946 36.383 12.6472 36.1119L13.5256 32.8572L13.5322 32.8337Z" fill="white"/>
								<path fillRule="evenodd" clipRule="evenodd" d="M9.48994 19.5356C9.48994 14.9824 14.0139 11.3211 19.8299 11.3211C22.6273 11.3211 25.0267 12.0956 26.9155 13.5725C29.2631 15.4085 30.1502 17.9358 30.9092 20.6785L33.9546 32.0348C31.0994 35.1743 27.203 37.2557 22.9889 37.8128C22.7362 36.0948 22.409 34.383 22.083 32.6771C22.0663 32.5899 22.0497 32.5028 22.033 32.4156C21.9717 32.0947 21.9079 31.7579 21.8433 31.4167C21.5044 29.6283 21.1419 27.7151 20.9919 27.2979C20.8132 26.8011 20.6547 26.4325 20.1058 26.4442C13.6527 26.5816 9.48994 23.8359 9.48994 19.5356ZM22.3299 15.8594C22.3299 15.169 21.7703 14.6094 21.0799 14.6094C20.3895 14.6094 19.8299 15.169 19.8299 15.8594C19.8299 16.5498 20.3895 17.1094 21.0799 17.1094C21.7703 17.1094 22.3299 16.5498 22.3299 15.8594Z" fill="white"/>
							</g>
							<defs>
								<clipPath id="clip0_601_152">
									<rect width="96" height="96" fill="white" transform="translate(0.611115)"/>
								</clipPath>
							</defs>
						</svg>
					</div>
					<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
						<span className={`bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ${currentUserStore ? '' : 'hidden'}`}>{currentUserStore?.type === 2 ? 'staff' : 'guest'}</span>
						{currentUserStore?.username}
					</h5>
					<div className="text-sm text-gray-500 dark:text-gray-400">{currentUserStore?.phone}</div>
					<div className="text-sm text-gray-500 dark:text-gray-400">{currentUserStore?.email}</div>
					<div className="flex mt-4 space-x-3 md:mt-6">
						<button onClick={logout} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">{
							`Log ${currentUserStore ? 'Out' : 'In'}`
						}</button>
					</div>
				</div>
			</div>
		</div>
	)
}
