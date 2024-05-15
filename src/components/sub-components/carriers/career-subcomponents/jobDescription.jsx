import React from 'react';
import { useParams } from 'react-router-dom';
import vacanciesData from '../../../../data/data.json';
import './jobDescription.css';

export const JobDescription = () => {
  const { jobTitle } = useParams();
  const job = vacanciesData.vacancies.find((job) => job.title === jobTitle);

  if (!job) {
    return <div>Job not found. Please check the job title and try again.</div>;
  }

  const renderList = (items) => (
    items && items.length > 0 ? (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      <p>No information available.</p>
    )
  );

  return (
    <div id='jobdescription'>
      <div className='description-header'>
        <div className='description-header-title'>
        <h1>{job.title}</h1>
        <a
          className='apply-button'
          href='../../application-form'
        >
          Apply
        </a>
        </div>
        <div className='description-header-tags'>
        <p>{job.type}</p>
      
        <p>{job.location}</p>
        </div>
      </div>
      <div className='job-description'>
        <div className='description-content'>
          <h3>Job Description</h3>
          <p>{job.description || 'No description available.'}</p>
          <h3>Responsibilities</h3>
          {renderList(job.responsibilities)}
          <h3>Requirements</h3>
          {renderList(job.requirements)}
          <h3>Preferred Qualifications</h3>
          {renderList(job.preferredQualifications)}
          <h3>Benefits</h3>
          {renderList(job.benefits)}
      
        </div>
      </div>
    </div>
  );
};

