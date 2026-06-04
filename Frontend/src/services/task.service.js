import axios from 'axios';


const API_URL = `${import.meta.env.VITE_API_URL}`;


export const getTasksApi=async () => {
	try {
		const response = await axios.get(API_URL);
		return response.data;

	} catch (error) {
	
		
	}
};


export const createTaskApi = async (taskData) => {
	try {
		const response = await axios.post(API_URL, taskData);
		return response.data;
	} catch (error) {
		
	}
};

export const updateTaskApi = async (taskId, updatedData) => {
	try {
		const response = await axios.put(`${API_URL}/${taskId}`, updatedData);
		return response.data;
	} catch (error) {
		
};

}


export const deleteTaskApi = async (taskId) => {
	try {
		const response = await axios.delete(`${API_URL}/${taskId}`);
	
		return response.data;
	}
	catch (error) {
		
	}	
};

export const toggleTaskApi = async (taskId, completed) => {
	try {
		const response = await axios.patch(`${API_URL}/toggle/${taskId}`, { completed });
		return response.data;
	} catch (error) {
	
	}
};
