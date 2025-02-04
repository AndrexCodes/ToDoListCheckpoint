const Header = ({openForm}) => {
    return (
        <section className="w-full px-8 text-gray-700 bg-white sticky top-0">
            <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                <div className="relative flex flex-col md:flex-row">
                    <a href="#_" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                        <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">AI<span className="text-indigo-600">.</span></span>
                    </a>
                    <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                        <p className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">To-Do List Manager</p>
                    </nav>
                </div>
                <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end cursor-pointer">
                    <p onClick={openForm} className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                        Create To-Do
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Header