import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hawker - A Simple Podcast App.</title>
        <meta
          name="description"
          content=""
        />
      </Head>
      <Header />
      <main>
        <Container>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
                <h1 className="text-4xl font-medium tracking-tight text-black">
                    Privacy Policy
                </h1>
                <p className="mt-2 text-lg text-gray-900">
                This Privacy Policy describes how Hawker ("the app", "we", "our" or "us") collects, uses and discloses information, and what choices you have with respect to the information.
                </p>
            </div>

            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl mt-12">
                <h2 className="text-3xl font-medium tracking-tight text-black">
                    Introduction
                </h2>
                <p className="mt-2 text-lg text-gray-900">
                    This Privacy Policy explains our online information practices applicable to the app available under the name Hawker and all services made available to you in association with the app. We will only collect and use information in accordance with this Privacy Policy.
                </p>
                <p className="mt-2 text-lg text-gray-900">
                    This Privacy Policy is incorporated into and forms part of our Terms of Service which outline the terms and conditions you agree to when accessing and using the app. We may revise this Privacy Policy at any time by updating this posting. Use of the app after such revisions are posted will signify your agreement to the revised Privacy Policy. You should visit this page periodically to review this Privacy Policy and any revisions.
                </p>
            </div>

            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl mt-12">
                <h2 className="text-3xl font-medium tracking-tight text-black">
                    What is Personal Information?
                </h2>
                <p className="mt-2 text-lg text-gray-900">
                    We consider "Personal Information" to mean any information relating to an identified or identifiable natural person.
                </p>
            </div>

            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl mt-12">
                <h2 className="text-3xl font-medium tracking-tight text-black">
                    Our Standards
                </h2>
                <p className="mt-2 text-lg text-gray-900">
                    We design the app to meet these privacy standards:
                </p>
                <ol className="list-decimal my-4 text-lg text-gray-900 ml-8">
                    <li className="mt-2">We do not request nor handle any Personal Information in any way</li>
                    <li className="mt-2">All application data is kept on your personal device</li>
                    <li className="mt-2">Some anonymised data is sent to Google Crashlytics and Google Analytics in order to detect and fix crashes and understand how users interact with the app</li>
                </ol>
            </div>

            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl my-12">
                <h2 className="text-3xl font-medium tracking-tight text-black">
                    Contacting Us
                </h2>
                <p className="mt-2 text-lg text-gray-900">
                Contact us if you have any questions or comments about this Privacy Policy or your Personal Information, to make an access or correction request, to exercise any applicable rights, to make a complaint, or to obtain information about our policies and practices. We will respond within a reasonable timeframe. Our Privacy Officer can be reached by email at privacy@curiouslab.io.
                </p>
            </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
