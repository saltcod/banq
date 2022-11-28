import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useUrlState } from '../hooks/useUrlState'

const YEARS = [
  2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
  2021,
]

const DIVISIONS = ['LM20-24', 'LM30-34']

const Aside = () => {
  const router = useRouter()

  const [{ years, divisions }, setParams] = useUrlState({ arrayKeys: ['years', 'divisions'] })
  console.log({ years })

  function handleYearToggle(year: string) {
    setParams((prevParams) => {
      const existingYears = (prevParams?.years ?? []) as string

      const existingYearsArr = existingYears.length > 0 ? existingYears.toString().split(',') : []

      const newYears = existingYearsArr.includes(year)
        ? existingYearsArr.filter((item) => item !== year.toString())
        : [...existingYearsArr, year]

      return {
        ...prevParams,
        years: newYears.length > 0 ? [newYears.toString()] : [],
      }
    })
  }

  function handleDivisionToggle(division: string) {
    setParams((prevParams) => {
      const existingDivisions = (prevParams?.divisions ?? []) as string

      const existingDivisionsArr =
        existingDivisions.length > 0 ? existingDivisions.toString().split(',') : []

      const newDivisions = existingDivisionsArr.includes(division)
        ? existingDivisionsArr.filter((item) => item !== division.toString())
        : [...existingDivisionsArr, division]

      return {
        ...prevParams,
        divisions: newDivisions.length > 0 ? [newDivisions.toString()] : [],
      }
    })
  }

  return (
    <aside className=" bg-gray-100">
      <h2 className="uppercase font-bold">Filter by year</h2>
      <ul className="grid grid-cols-2 gap-4">
        {YEARS.map((year) => (
          <li key={year}>
            <button
              onClick={() => handleYearToggle(year.toString())}
              className={`year-filter ${
                years?.toString().includes(year.toString()) ? 'underline font-bold' : ''
              }`}
            >
              {year}
            </button>
          </li>
        ))}
      </ul>

      <h2 className="uppercase font-bold">Filter by division</h2>
      <ul className="grid grid-cols-2 gap-4">
        {DIVISIONS.map((division) => (
          <li key={division}>
            <button
              onClick={() => handleDivisionToggle(division)}
              className={`year-filter ${
                divisions?.toString().includes(division.toString()) ? 'underline font-bold' : ''
              }`}
            >
              {division}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Aside
