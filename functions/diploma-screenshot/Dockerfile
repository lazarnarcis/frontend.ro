# Code snippet adapted from 
# https://docs.aws.amazon.com/lambda/latest/dg/images-create.html

FROM public.ecr.aws/lambda/nodejs:14

# Function file is named "index.js", and there is a package.json file in the app directory 
COPY index.js package.json  ${LAMBDA_TASK_ROOT}

RUN npm install -g yarn

# Install NPM dependencies for function
RUN yarn

# Set the CMD to your handler
CMD [ "index.handler" ] 
