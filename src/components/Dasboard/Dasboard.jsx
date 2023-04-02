import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dasboard = () => {
    const studentArr = [
        {
            id: 1,
            name: 'stu-1',
            phy: 40,
            chem: 50,
            math: 30
        },
        {
            id: 2,
            name: 'stu-2',
            phy: 70,
            chem: 80,
            math: 20
        },
        {
            id: 3,
            name: 'stu-3',
            phy: 60,
            chem: 80,
            math: 90
        },
        {
            id: 4,
            name: 'stu-4',
            phy: 65,
            chem: 90,
            math: 100
        },
        {
            id: 5,
            name: 'stu-5',
            phy: 90,
            chem: 70,
            math: 50
        },
        {
            id: 6,
            name: 'stu-6',
            phy: 96,
            chem: 56,
            math: 80
        }
    ];
    return (
        <div>
            <LineChart
                width={500}
                height={300}
                data={studentArr}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                <Line stroke="#00FF02" dataKey="phy"></Line>
                <Line stroke="#002FFF" dataKey="chem"></Line> 
                <Line  stroke="#FF0022" dataKey="math"></Line>
                
            </LineChart>
        </div>
    );
};

export default Dasboard;