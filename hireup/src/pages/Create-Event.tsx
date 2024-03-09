import React, { useState } from 'react';
import { api } from '~/utils/api';

function EventForm() {
    const [title, setTitle] = useState('');
    const [theme, setTheme] = useState('');
    const [description, setDescription] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [startDate, setStartDate] = useState(Date);
    const [endDate, setEndDate] = useState(Date);
    const [tags, setTags] = useState('');
    const [companies, setCompanies] = useState('');



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const event = mutate({ title, theme, description, shortDescription, startDate, endDate, tags, companies })
    };

    const { mutate, error } = api.event.createEvent.useMutation({
        onSuccess: (data) => {
            // Save the user ID to session storage
            sessionStorage.setItem('profileId', data.id.toString());

            // Do any other actions needed after successful user creation
            console.log('Profile created successfully', data);

        },
        // Optionally, you can handle errors as well
        onError: (error) => {
            console.error('Error creating user:', error);
        },
    });

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-12 m-12 mb-20">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Event Information</h2>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                                Title
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="theme" className="block text-sm font-medium leading-6 text-gray-900">
                                Theme
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="theme"
                                    id="theme"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => setTheme(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                Description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    rows={3}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="shortDescription" className="block text-sm font-medium leading-6 text-gray-900">
                                Short Description
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="shortDescription"
                                    id="shortDescription"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => setShortDescription(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="startDate" className="block text-sm font-medium leading-6 text-gray-900">
                                Start Date
                            </label>
                            <div className="mt-2">
                                <input
                                    id="startDate"
                                    type="date"
                                    name="startDate"
                                    className="block w-full rounded-md border-gray-300 px-2 pt-1 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="endDate" className="block text-sm font-medium leading-6 text-gray-900">
                                End Date
                            </label>
                            <div className="mt-2">
                                <input
                                    id="endDate"
                                    type="date"
                                    name="endDate"
                                    className="block w-full rounded-md border-gray-300 px-2 pt-1 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="tags" className="block text-sm font-medium leading-6 text-gray-900">
                                Tags
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="tags"
                                    id="tags"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => setTags(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="companies" className="block text-sm font-medium leading-6 text-gray-900">
                                Companies
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="companies"
                                    id="companies"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => setCompanies(e.target.value)}
                                />
                            </div>
                        </div>




                    </div>
                </div>

                <button type='submit'>Create Event</button>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Continue
                    </button>
                </div>

            </div>
        </form>
    );
}

export default EventForm;

