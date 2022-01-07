import React from 'react';
import PropTypes from 'prop-types';
import Stat from './Stat';

const Statistics = ({
  totalWords,
  totalExamples,
  totalAudioPronunciations,
  totalStandardIgboWords,
  contributors,
  stars,
}) => (
  <div className="w-full flex flex-col justify-center items-center bg-gray-200 space-y-6">
    <div className="flex flex-row justify-center items-center flex-wrap w-full lg:w-9/12">
      <Stat value={totalWords} header="Words in the database" />
      <Stat value={totalExamples} header="Example Igbo sentences" />
      <Stat value={totalAudioPronunciations} header="Word audio pronunciations" />
      <Stat value={totalStandardIgboWords} header="Standard Igbo words" />
      <Stat value={10} header="Words with Nsịbịdị" />
    </div>
    <div className="flex flex-row justify-center items-center flex-wrap w-full lg:w-9/12">
      {contributors ? (
        <Stat value={contributors.length} header="GitHub Contributors">
          <div className="flex flex-row flex-wrap justify-center items-center">
            {contributors.slice(0, 10).map((contributor) => (
              <div key={contributor.avatar_url}>
                <img
                  src={contributor.avatar_url}
                  className=" text-gray-700 bg-gray-400 w-12  m-2 rounded-full"
                  alt="github avatar"
                />
              </div>
            ))}
          </div>
        </Stat>
      ) : null}
      <Stat value="95" header="Members in Slack" exact={false} />
      <Stat value={stars} header="GitHub stars" />
    </div>
  </div>
);

Statistics.propTypes = {
  totalWords: PropTypes.number,
  totalExamples: PropTypes.number,
  totalAudioPronunciations: PropTypes.number,
  totalStandardIgboWords: PropTypes.number,
  contributors: PropTypes.arrayOf(PropTypes.shape({})),
  stars: PropTypes.number,
};

Statistics.defaultProps = {
  totalWords: 0,
  totalExamples: 0,
  totalAudioPronunciations: 0,
  totalStandardIgboWords: 0,
  contributors: [],
  stars: 0,
};

export default Statistics;
