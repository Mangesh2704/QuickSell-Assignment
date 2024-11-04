import React from 'react';
import { TbProgress } from 'react-icons/tb';

import NoPriorityIcon from '../components/icons_FEtask/No-priority.svg'; 
import LowPriorityIcon from '../components/icons_FEtask/Img - Low Priority.svg'; 
import MediumPriorityIcon from '../components/icons_FEtask/Img - Medium Priority.svg'; 
import HighPriorityIcon from '../components/icons_FEtask/Img - High Priority.svg'; 
import UrgentPriorityIcon from '../components/icons_FEtask/SVG - Urgent Priority colour.svg'; 
import BacklogIcon from '../components/icons_FEtask/Backlog.svg'; 
import TodoIcon from '../components/icons_FEtask/To-do.svg'; 
import InProgressIcon from '../components/icons_FEtask/in-progress.svg'; 
import DoneIcon from '../components/icons_FEtask/Done.svg'; 
import CanceledIcon from '../components/icons_FEtask/Cancelled.svg'; 

export const getPriorityIcon = (priority: string) => {
    switch (priority) {
        case "No priority": return <img src={NoPriorityIcon} alt="No Priority" style={{ width: 14, height: 14 }} />;
        case "Low": return <img src={LowPriorityIcon} alt="Low Priority" style={{ width: 14, height: 14 }} />;
        case "Medium": return <img src={MediumPriorityIcon} alt="Medium Priority" style={{ width: 14, height: 14 }} />;
        case "High": return <img src={HighPriorityIcon} alt="High Priority" style={{ width: 14, height: 14 }} />;
        case "Urgent": return <img src={UrgentPriorityIcon} alt="Urgent" style={{ width: 14, height: 14 }} />;
        default: return <img src={UrgentPriorityIcon} alt="Urgent" style={{ width: 14, height: 14 }} />;
    }
}

export const getStatusIcon = (status: string) => {
    switch (status) {
        case "Backlog": return <img src={BacklogIcon} alt="Backlog" style={{ width: 24, height: 24 }} />;
        case "Todo": return <img src={TodoIcon} alt="Todo" style={{ width: 24, height: 24 }} />;
        case "In progress": return <TbProgress color='#FFC300' size={16} />;
        case "Done": return <img src={DoneIcon} alt="Done" style={{ width: 16, height: 16 }} />;
        case "Canceled": return <img src={CanceledIcon} alt="Canceled" style={{ width: 16, height: 16 }} />;
        default: return <img src={CanceledIcon} alt="Canceled" style={{ width: 16, height: 16 }} />;
    }
}
