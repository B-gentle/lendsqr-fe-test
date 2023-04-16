import axios from 'axios';
import { useQuery } from 'react-query';

const useGetUsers = (data) => {
    
    const { data: users, isLoading, isError, refetch } = useQuery(["usersData"], async () => {
        const res = await axios.get(data);
        localStorage.setItem("usersData", JSON.stringify(res.data));
        return res.data
      });

  return {users, isLoading, isError, refetch }
}

export default useGetUsers