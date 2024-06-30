import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function SEOContent() {
  return (
    <motion.section
      className="w-full max-w-2xl mx-auto p-4 sm:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="shadow-xs">
        <CardHeader>
          <CardTitle className="text-2xl font-bold mb-4 text-muted-foreground">Mockmint: Generate mock data for your projects</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Mockmint?</AccordionTrigger>
              <AccordionContent>
                Mockmint is a free online mock data generator tool. It helps developers, testers, and designers create fake data quickly and easily. Whether you need names, emails, phone numbers, or addresses, Mockmint can generate it all.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How does Mockmint work?</AccordionTrigger>
              <AccordionContent>
                Using Mockmint is simple:
                <ol className="list-decimal list-inside mt-2">
                  <li>Choose the types of data you need</li>
                  <li>Set the number of records you want</li>
                  <li>Click &quot;Generate&quot;</li>
                  <li>Export your mock data in CSV or JSON format</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What kind of mock data can I generate with Mockmint?</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside">
                  <li>Personal information: names, birthdays, social security numbers</li>
                  <li>Contact details: email addresses, phone numbers, addresses</li>
                  <li>Business data: company names, job titles, departments</li>
                  <li>Financial information: credit card numbers, account balances, transactions</li>
                  <li>Web data: usernames, passwords, IP addresses, user agents</li>
                  <li>And much more!</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Why should I use Mockmint for generating mock data?</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside">
                  <li>It&apos;s fast: Generate thousands of records in seconds</li>
                  <li>It&apos;s easy: No coding required, just point and click</li>
                  <li>It&apos;s flexible: Choose from a wide range of data types</li>
                  <li>It&apos;s realistic: Our algorithms create believable mock data</li>
                  <li>It&apos;s free: No sign-up or payment required</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>When should I use a mock data generator like Mockmint?</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside">
                  <li>Testing new software or websites</li>
                  <li>Populating databases for development</li>
                  <li>Creating sample data for presentations or demos</li>
                  <li>Practicing data analysis or visualization</li>
                  <li>Training AI models</li>
                  <li>Stress testing systems with large datasets</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Is Mockmint&apos;s generated data safe to use?</AccordionTrigger>
              <AccordionContent>
                Yes, Mockmint generates completely fake data and it is based on fakerjs.dev. It&apos;s not based on real information. This makes it safe to use for testing and development without privacy concerns.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Can I customize the mock data Mockmint generates?</AccordionTrigger>
              <AccordionContent>
                Absolutely! Mockmint offers various options to customize your generated data. You can specify formats, ranges, and patterns for many data types to match your specific needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>How does Mockmint compare to other mock data generators?</AccordionTrigger>
              <AccordionContent>
                Mockmint stands out with its user-friendly interface, wide range of data types, and quick generation speed. Unlike some tools that require coding, Mockmint is accessible to both technical and non-technical users.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>Is Mockmint free to use?</AccordionTrigger>
              <AccordionContent>
                Yes, Mockmint is completely free to use. There are no hidden charges, subscriptions, or limitations on the amount of data you can generate.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>Can I use Mockmint for commercial projects?</AccordionTrigger>
              <AccordionContent>
                Absolutely! Mockmint can be used for both personal and commercial projects without any restrictions. It&apos;s a valuable tool for businesses of all sizes.
              </AccordionContent>
            </AccordionItem>

       

            <AccordionItem value="item-11">
              <AccordionTrigger>Can I integrate Mockmint with my existing tools or workflows?</AccordionTrigger>
              <AccordionContent>
                While Mockmint is primarily a web-based tool, we offer export options in CSV and JSON formats, making it easy to integrate the generated data into your existing tools and workflows.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
              <AccordionTrigger>Is there a limit to how much data I can generate with Mockmint?</AccordionTrigger>
              <AccordionContent>
                Mockmint is designed to handle large data generation tasks. While there&apos;s no hard limit, we recommend generating data in batches for the best performance. If you need extremely large datasets, consider breaking your request into multiple generations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className="mt-6">
            Start using Mockmint today and see how easy it can be to generate high-quality mock data for your projects. Whether you&apos;re a developer, tester, designer, or data analyst, Mockmint has the tools you need to work more efficiently.
          </p>
        </CardContent>
      </Card>
    </motion.section>
  )
}
