import type { FC } from 'react';
import { Popover } from '@headlessui/react'
import {
    XMarkIcon,
} from '@heroicons/react/24/outline'


const closeMobileNav: FC = () => {
    return (
        <div className="-mr-2">
            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
        </div>
    );
}
export default closeMobileNav;