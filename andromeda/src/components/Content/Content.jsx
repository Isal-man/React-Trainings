const Content = () => {
    const students = [
        { id: 1, nim: "001", name: "Ahmad Faisal Hidayat" },
        { id: 2, nim: "002", name: "Muhammad Ikrar Wiratama" },
        { id: 3, nim: "003", name: "Muhammad Yazid Irham" },
    ];

    return (
        <>
            <h1 style={{ color: "gray", textDecoration: "underline" }}>
                Hello, Universe!
            </h1>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>{student.name}</li>
                ))}
            </ul>
            <table border={2} cellPadding={5}>
                <tbody>
                    <tr>
                        <th>Nim</th>
                        <th>Name</th>
                    </tr>
                    {students.map((student, i) => (
                            <tr key={i}>
                                <td>{student.nim}</td>
                                <td>{student.name}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Content;
