import { useAccount } from 'wagmi';
import { BenefitsEra } from './BenefitsEra';
import { FaqSection } from './Faq';
import { KingpassClaim } from './KingpassClaim';
import { KingpassDetail } from './KingpassDetail';

export const Home = () => {
  const { isConnected } = useAccount();
  return (
    <>
      <KingpassDetail />
      <BenefitsEra />
      {isConnected && <KingpassClaim />}
      <FaqSection />
    </>
  );
};
