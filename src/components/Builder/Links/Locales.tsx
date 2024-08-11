"use client"

import Link from "next/link"

/** TODO: add proper types */
const LocaleLinks = ({ builderState }: any) => {
  const locales = builderState?.state?.localeLinks?.data?.locales
  return (
    <ul className="flex flex-row gap-2">
      {locales?.map((locale: { url: string; label: string; displayName: string }) => (
        <li key={locale?.displayName} className="bg-white/15 px-2 rounded-full">
          <Link href={locale?.url}>
            <h6 className="uppercase text-white">{locale?.displayName}</h6>
            <span className="sr-only">{locale?.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default LocaleLinks