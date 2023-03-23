import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Home() {
    const {user} = useSelector((state) => state.AuthReducer);
    console.log(user.email,"user");
    return (
        <div>
            <Container>
                <Table striped bordered hover className='mt-4'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default Home
