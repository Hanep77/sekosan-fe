import Input from "@/app/components/input";

export default function SignIn() {
  return <div>
    <h2 className="text-indigo-600 text-3xl font-semibold mb-5">Sign In</h2>
    <form className="flex flex-col gap-3">
      <Input type="email" label="Email" name="email" />
      <Input type="password" label="Password" name="password" />
      <button type="submit" className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 active:bg-indigo-800">Sign In</button>
    </form>
  </div>
}
