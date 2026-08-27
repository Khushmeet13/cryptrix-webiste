import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'What is Cryptix DEX?',
    answer:
      'Cryptix DEX is a decentralized exchange that lets you trade digital assets directly from your own wallet. There are no accounts, no custody of your funds by a third party, and every trade settles on-chain.',
  },
  {
    question: 'Do I need to complete KYC to trade?',
    answer:
      'No. Cryptix DEX is non-custodial and permissionless — you connect a wallet and trade immediately. There is no sign-up, identity verification, or approval process required.',
  },
  {
    question: 'How are trading fees calculated?',
    answer:
      'A flat 0.30% fee applies per swap. Of that, 0.25% is paid directly to liquidity providers and 0.05% funds the protocol treasury and ongoing development — see the Fees & Economics section above for the full breakdown.',
  },
  {
    question: 'Is Cryptix DEX safe to use?',
    answer:
      'All smart contracts are independently audited and open-source, and the protocol runs an active bug bounty program. Because trading is non-custodial, your assets never leave your wallet until a trade is confirmed.',
  },
  {
    question: 'How do I become a liquidity provider?',
    answer:
      'Deposit a token pair into any pool from the Liquidity page. You start earning a share of trading fees immediately, plus any additional Cryptix incentives, and can withdraw your position at any time.',
  },
  {
    question: 'Which wallets and chains are supported?',
    answer:
      'Cryptix DEX supports MetaMask, WalletConnect, and other major wallets, with trading available across multiple chains. New chains are added regularly as liquidity and demand grow.',
  },
  {
    question: 'What happens if a trade fails or reverts?',
    answer:
      'If a swap falls outside your slippage tolerance or a transaction reverts on-chain, your funds simply stay in your wallet — nothing is lost besides the network gas fee for the attempt.',
  },
]

export default function Faq() {
  return (
    <div className="bg-[#01021f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              FAQ
            </span>
          </div>

          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl">
            Everything you need to know about trading, fees, and security on Cryptix DEX.
          </p>

          <dl className="mt-12 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left cursor-pointer">
                    <span className="text-base/7 font-semibold group-data-open:text-blue-400 transition-colors">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 text-gray-400 group-data-open:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 text-blue-400 group-not-data-open:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-400">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
