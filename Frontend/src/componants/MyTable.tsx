import { student, MyTableProps } from "../main";

function showdata(studentsArray: student[]) {
  return studentsArray.map((person) => {
    return (
      <tr key={person.db_id}>
        <td>{person.name}</td>
        <td>{person.age}</td>
        <td>{person.email}</td>
        <td>{person.class}</td>
        <td>
          <button className="hover:bg-gray-400/50 rounded-full cursor-pointer p-1.5">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAC2klEQVRIS82XzUsUcRjHn9/M2FrQmxWlresEBZIEXSQizMRqWgN11/+gAqEXDOoQFKR0qFNEh4Jebl0i2N0SdFa8pFSHLkYdtKKdpbRWLFTYzH2Zp2dcxp3V2XV2RrO5LLM8z/N5vs88v+eZYbBKF1slLhQEnxz0bHbF2X4VuBqO4VYrSarIJgDxA5TCUKhBmcznYwpu7qusEFC4S05tVmD5bfBpck3ifHfD2MRCm0Xgln7PXi7F9TPGyp1BdW+MJAEbu6VoxBgvB9wSrqjkwPWW/ty+PNBMFERUUq5ErVF5DtgniyFS2rKc0GwsfBCQlHb9fh7sl6vKgXFjKwPVVMNsnP3e0ifF4hojCw5XnQbgHjkAT5HvxkL+VHJv8IQi54B9YfEKA3bTDpgCfk8xPCQAd5aUXM4XAwE7gpKinRajYrGTbq/bACdTKux74Y2MaL7+8K4b9HPNPA520XMmjkMwKZikKm2iOPcCUuTcHLhnpxu5khFq0nWL4eZgUsvmsrF24TCf/nM4xZfeIvgpBPWhkJ69mubXviL/PXkUd5LiLgeKcRhhpj4oxcYBgfn7xPuUdLuhAnlyd1BqOhYfBRfWP2tQfujR22RPjcr4IWosoXC17IIRPvMurMuBhsVqRDZAbbpt6UdkA6yNPcEFB43QZtm9W4CS19agWlpFgjUoU5N1gabRb7qqDFQYBMZ2LK1UtygCjAAxFWZrn0tjX41QHoSB4jdYUWB8SdPmiA5t7RVFjsGb4pTaUpwFZ6CMygtu6+XNWiJTLwWPR29bPcdTdD6HMu6s2smuVgF9IUkJWQXbEWcyLTE9o06X9Tb9mv63YIDHNM/P6BkZ9rHt7WShIviFXvoOmL76+MMrBv5Eg/RYoDESNWY4r7hVFjuoY+9YSN+yCc2AJ8AnLgaPjv5c6DQP9vaUbSjl11+gFVdiObKpIY6nUX2fUOPv9EYyM/s/P2GcKS/s/RfAl0Eub3tw3gAAAABJRU5ErkJggg==" />
          </button>
          <button className="hover:bg-gray-400/50 rounded-full cursor-pointer p-1.5">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAC40lEQVRIS9WXy2sTcRDH57dJKEWJqC1SaRW6e/IB2dTHWQSFSq1Jk2CLFUHEg9agePCmnrxYrMWTFBGpjybVpj4vgn+AdrdWKyK7TQu1oFaR+KhpuxlnE/JsN11N0mpuu7/5zWdmft+Z34bBEv3YEnEhL/jh5nUro5zNoVlgIwNWYSZIBJxkMfbaCrODrsHRr0Z75gX3izVro1DWyRg0mYEZ2VAQPeVs6njDwMRkrs0ccEAUNjCGTwFYVSHQ5F5ECIM2s9M3NBbO9JcFDm3ia6Zt8JwxtqYY0DQcR8u5qa2ZmWeBgyIfAsYaiwlNwQGv+iT1aPI5Bb5bt74qhraJUkDjPhGidu3b6t1DH37ojykwne1hElNXycBxONZ7ZfVJLvgMgS/kUWgbRb2Nzr/VwOYmCUkiH+2GLYTo98hqZxY46BTO0Yuz825CbKdITyMA1yvy3aSD5kw7At7yykorlS9GOrlM6ycM4Oe9kqJz0qVeAHyDIj1EjjEAYAEn30sDZV+ienAfZMXtA9AoMEaBXSfwweKAE4Q7KKsHdMAzAOsnke+nt1ylrDbsAJjVA2KJauzPo5M/zDjtKVghKS1xUHV1OawY13zDMB0PxMkHqAquBcT512DSFz6qZaprywDM6JAXdWAbQb6PoHtMdMR/BiYh9VbKSrNe6seCUKZnWK8o0cSZC7eplTzFL/VccT0gSIzE1Vg6cSFmt5Mo3KPs9sbFDhgCSfWUqp06qPFP6gMkKAo9uSXV712vpLbEB4iz9gqZHStaH5PTU4joMBwOCNco/ze0ftFwZJIPj6RcMj+5TPSJGROqjJuuxr5FBRNUWx5hq6gLIosKppHbRRfNkWRlUvdx3kvCTB3z2JAoVevPqe3ut+8/LxqYBPnOArFdTXJ4LDO29BeIo9bPOK6jwORyt3dj9JffNzz+JXchBaYRaP9uxzYa9raC4DH4CJz2alnE8jIppPn8/Zt/YQrKfIHNvwHOB18uWEL9vQAAAABJRU5ErkJggg==" />
          </button>
        </td>
      </tr>
    );
  });
}
export default function MyTable({ studentsArray }: MyTableProps) {
  return (
    <table className="border-2 h-fit w-fit dark:bg-dark-900">
      <thead className="border-b-2">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>E-mail</th>
          <th>Class</th>
          <th>Controls</th>
        </tr>
      </thead>
      <tbody>{showdata(studentsArray)}</tbody>
    </table>
  );
}
