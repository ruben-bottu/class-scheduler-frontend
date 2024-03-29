import React, {  } from 'react';
import { ClassScheduleProposal } from '../../types';

type Props = {
    proposals: ClassScheduleProposal[];
    handleOnClick?: (proposal: ClassScheduleProposal) => void;
};

const ClassScheduleProposalsOverviewList: React.FC<Props> = ({
    proposals,
    handleOnClick = () => {},
}: Props) => {
    return (
        <>
            {proposals && !!proposals.length && (
                <section className="py-5" style={{ backgroundColor: '#5BA0BF' }}>
                    {/* #70a7c2 */}
                    <div className="container">
                        <ul className="list-group d-flex flex-row flex-wrap">
                            {proposals.map((proposal, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleOnClick(proposal)}
                                    role="button"
                                    className="me-md-2 mb-md-2 list-group-item rounded"
                                >
                                    <p className="py-md-3 ps-md-2 mb-md-3 fs-4 border-bottom">
                                        Number of overlaps: {proposal.averageWeeklyOverlapCount}
                                    </p>
                                    <table className="table table-hover table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col" style={{ color: '#FFA566' }}>
                                                    Course Name
                                                </th>
                                                <th scope="col" style={{ color: '#FFA566' }}>
                                                    Group Name
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {proposal.combination.map(({ course, group }, index) => (
                                                <tr key={index}>
                                                    <td>{course.name}</td>
                                                    <td>{group.name}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}
        </>
    );
};

export default ClassScheduleProposalsOverviewList;
