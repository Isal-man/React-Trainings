const Content = () => {
    const students = [
        { id: 1, name: "Ahmad Faisal Hidayat" },
        { id: 2, name: "Muhammad Ikrar Wiratama" },
        { id: 3, name: "Muhammad Yazid Irham" }
    ]

    return (
        <>
            <h1 style={{ color: "gray", textDecoration: "underline" }}>
                Hello, Universe!
            </h1>
            <ul>
                {students.map((student) => <li key={student.id}>{student.name}</li>)}
            </ul>
        </>
    );
};

export default Content;
