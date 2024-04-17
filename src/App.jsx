import axios from 'axios';
import Navbar from './components/Navbar';
import React from 'react';
import { tableHead } from './utils/table';
import { dateFormat } from './utils/date';

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('http://localhost:3000/inpatient-raw');
      const { status, data } = res;
      if (status !== 200) {
        alert('gagal ambil data');
        return;
      }

      setData(data);
      console.log(res);
    };
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-4">
        <div className="relative overflow-x-auto rounded">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white text-center">
              <tr>
                {tableHead.map((val, index) => {
                  return <th key={index}>{val}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {data.map((val, index) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={index}
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-sm"
                    >
                      {index + 1}
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-sm"
                    >
                      {dateFormat(val.indate)}
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {val.ipstatus}
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {val.host_branch}
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {val.member_branch}
                    </td>
                    <td className="px-6 py-4 dark:text-white">
                      {val.claim_no}
                    </td>
                    <td className="px-6 py-4 dark:text-white">
                      {val.provider_name}
                    </td>
                    <td className="px-6 py-4 dark:text-white">
                      {val.covarage}
                    </td>
                    <td className="px-6 py-4 dark:text-white">
                      {val.member_no}
                    </td>
                    <td className="px-6 py-4 dark:text-white">
                      {val.member_name}
                    </td>
                    <td className="px-6 py-4 dark:text-white">
                      {val.vip_member}
                    </td>
                    <td className="px-6 py-4 dark:text-white">
                      {val.corporate}
                    </td>
                    <td className="px-6 py-4 dark:text-white">
                      {val.customer_group}
                    </td>
                    <td className="px-6 py-4 dark:text-white">{val.gl_no}</td>
                    <td className="px-6 py-4 dark:text-white">
                      {val.no_kartu}
                    </td>
                    <td className="px-6 py-4 dark:text-white">{val.icd10}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
