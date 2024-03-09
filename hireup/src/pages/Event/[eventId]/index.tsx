import React, { useState } from 'react'
import { api } from '~/utils/api';
import { useRouter } from 'next/router';

function index() {
    const router = useRouter();
    const eventIdRaw = router.query.eventId; // Retrieve the raw value from the query
    const eventId = typeof eventIdRaw === 'string' ? parseInt(eventIdRaw, 10) : undefined;
    const [enrolled, setEnrolled] = useState(false)

    const { mutate, error } = api.event.enroll.useMutation({
        onSuccess: (data) => {
            setEnrolled(true)
            console.log(data)
        },
        // Optionally, you can handle errors as well
        onError: (error) => {
            console.error('Error creating user:', error);
        },
    });

    const handleEnroll = async (e: any) => {
        e.preventDefault();


        if (typeof eventId === 'number') {
            const profile = mutate({ eventId });
        } else {
            console.log('eventId is undefined'); // Handle the case where eventId is undefined
        }





    };

    return (
        <div className="container mx-auto px-4 py-6 mt-20  ">

            <header className="flex justify-between items-center py-4">
                <h1 className="text-xl font-semibold">Deep Learning Competition</h1>
                <button onClick={handleEnroll} className="bg-blue-500 text-white px-4 py-2 rounded">{enrolled ? "Enrolled" : "Enroll Now"}</button>
            </header>


            <div className="mt-8">
                <h2 className="text-lg font-bold">Event Details</h2>
                <p className="mt-4">
                    This competition tests your ability to solve a complex challenge in the field of deep learning. You will have 30 days to submit your solution. The top submissions will be rewarded with cash prizes and recognition in the AI community. Don't miss this opportunity to showcase your skills and learn from the best.
                </p>
            </div>


            <div className="mt-8">
                <h2 className="text-lg font-bold">Challenge Details</h2>
                <p className="mt-4">
                    This competition involves developing an algorithm that can accurately identify faces in a set of images. You will be provided with a training dataset and will be judged based on your model's accuracy and efficiency. This is a common problem in computer vision, and the winner will be recognized as an expert in this field.
                </p>
            </div>


            <div className="mt-8">
                <h2 className="text-lg font-bold">Timeframe</h2>
                <div className="flex justify-between mt-4">
                    <div>
                        <span className="font-semibold">Start:</span> Dec 1, 2023
                    </div>
                    <div>
                        <span className="font-semibold">End:</span> Dec 31, 2023
                    </div>
                </div>
            </div>


            <div className="mt-8">
                <h2 className="text-lg font-bold">Submissions</h2>
                <div className="flex flex-col mt-4">

                    <div className="flex justify-between items-center p-4 bg-white shadow rounded mt-4">
                        <span>Face Recognition Model</span>
                        <div>
                            <span className="font-semibold">Accuracy:</span> 92%
                            <span className="font-semibold">Efficiency:</span> 0.2ms
                            <span className="text-blue-500 ml-4 cursor-pointer">View Submission</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-white shadow rounded mt-4">
                        <span>Face Recognition Model V2</span>
                        <div>
                            <span className="font-semibold">Accuracy:</span> 95%
                            <span className="font-semibold">Efficiency:</span> 0.1ms
                            <span className="text-blue-500 ml-4 cursor-pointer">View Submission</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-lg font-bold">Prizes</h2>
                <div className="flex flex-col mt-4">

                    <div className="flex justify-between items-center p-4 bg-white shadow rounded mt-4">
                        <span>1st Place</span>
                        <span>$10,000</span>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-white shadow rounded mt-4">
                        <span>2nd Place</span>
                        <span>$5,000</span>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-white shadow rounded mt-4">
                        <span>3rd Place</span>
                        <span>$2,000</span>


                    </div>

                </div>
            </div>
        </div>
    )

}

export default index;
