import { BenefitsEra } from './BenefitsEra';
import { KingpassClaim } from './KingpassClaim';
import { KingpassDetail } from './KingpassDetail';

export const Home = () => {
  return (
    <>
      <KingpassDetail />
      <BenefitsEra />
      <KingpassClaim />
    </>
  );
};
