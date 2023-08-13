import { StatList, StatItem, StatisticTitle } from './statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            <p>{stat.label}</p>
            <p>{stat.percentage}</p>
          </StatItem>
        ))}
      </StatList>
    </>
  );
};
