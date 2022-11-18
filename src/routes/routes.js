import Home from "@/pages/Home";
import SheepTable from "@/pages/SheepTable";
import SheepDetail from "@/pages/SheepDetail";
import Excel from "@/pages/Excel";
import Backup from "@/pages/Backup";

export default [
    {path: '/', component: Home, name: 'home',},
    {path: '/sheeps', component: SheepTable, name: 'sheeps',},
    {path: '/sheep-detail', component: SheepDetail, name: 'sheep-detail',},
    {path: '/excels', component: Excel, name: 'excels',},
    {path: '/backups', component: Backup, name: 'backups',},
]