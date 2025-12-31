import axios from "axios";
import { server } from "../../server";

// Get admin dashboard statistics
export const getAdminDashboardStats = () => async (dispatch) => {
  try {
    dispatch({
      type: "adminDashboardStatsRequest",
    });

    const token = localStorage.getItem('token');
    const { data } = await axios.get(`${server}/admin/dashboard-stats`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    dispatch({
      type: "adminDashboardStatsSuccess",
      payload: data,
    });
  } catch (error) {
    console.error("Error fetching admin dashboard stats:", error.response || error);
    dispatch({
      type: "adminDashboardStatsFailed",
      payload: error.response?.data?.message || "Failed to fetch dashboard statistics",
    });
  }
};

