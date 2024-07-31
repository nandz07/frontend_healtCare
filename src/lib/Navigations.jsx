import { FaUserDoctor } from 'react-icons/fa6'
import {
    HiOutlineViewGrid,
    HiOutlineUsers,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog,
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS=[
    {
        key:'dashboard',
        label:'Dashboard',
        path:'/admin/dashboard',
        icon:<HiOutlineViewGrid />
    },
    {
        key:'patients ',
        label:'Patients',
        path:'/admin/patients',
        icon:<HiOutlineUsers/>
    },
    {
        key:'doctors',
        label:'Doctors',
        path:'/admin/doctors',
        icon:<FaUserDoctor />
    },
    
]
export const DASHBOARD_SIDEBAR_BOTTOM_LINKS=[
    {
        key:'support',
        label:'Help & Support',
        path:'/admin/support',
        icon:<HiOutlineQuestionMarkCircle/>
    },
]