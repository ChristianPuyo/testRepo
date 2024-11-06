import React, { useEffect } from 'react';
import useStudentStore from '../../store/studentStore';
import styles from './studentList.module.css';
import { useNavigate } from 'react-router-dom';

const StudentList = () => {
  const navigate = useNavigate();
  const { fetchStudents, students, deleteStudent } = useStudentStore();

  const volverAinicio = () => {
    navigate("/");
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteStudent(id);
    }
  };

  return (
    <div className={styles.fondo_genereral}>
      <button onClick={volverAinicio} className={styles.backButton}>Volver a inicio</button>
    <div className={styles.listContainer}>
      <h1 className={styles.title}>Lista de estudiantes</h1>
      {students.map((user) => (
        <div key={user.id} className={styles.studentCard}>
          <h3 className={styles.studentName}>{user.firstName} {user.lastNameP} {user.lastNameM}</h3>
        </div>
      ))}
    </div>
    </div>
  );
};

export default StudentList;
