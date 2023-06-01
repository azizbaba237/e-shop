import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

function Login() {
  return (
    <div className="grid grid-cols-1 items-center justify-items-center h-screen">
      <Card className="w-96">
        <CardHeader
          className="mb-4 grid h-28 place-items-center bg-pink-200"
        >
          <Typography variant="h3" color="black">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="bg-pink-200 hover:bg-gray-800 hover:text-white text-black" fullWidth>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don't have an account?
            <Typography
              as="a"
              href="register"
              variant="small"
              color="blue"
              className="ml-1 font-bold"
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
export default Login;
