
import { Award, Shield, Users, Building2, Globe } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Leading Petroleum Trading Excellence Since 2008
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Delta Trade stands as a premier petroleum trading company, specializing in gasoline, gas, oil, and refined products on the Saint Petersburg Exchange Market (SPbMTSB). Our deep market expertise and strategic approach have made us a trusted partner for businesses seeking reliable petroleum trading solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With over 15 years of experience, we combine cutting-edge technology with traditional trading wisdom to deliver exceptional results for our clients across various market conditions.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Award className="h-6 w-6 text-[#ff002a] mr-2" />
                <span className="text-gray-700">SPbMTSB Certified</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-[#ff002a] mr-2" />
                <span className="text-gray-700">Fully Licensed</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#ff002a]/10 to-transparent rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-[#ff002a] mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Team</h4>
                  <p className="text-gray-600">Experienced traders and analysts</p>
                </div>
              </div>
              <div className="flex items-center">
                <Building2 className="h-8 w-8 text-[#ff002a] mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">Market Access</h4>
                  <p className="text-gray-600">Direct SPbMTSB exchange access</p>
                </div>
              </div>
              <div className="flex items-center">
                <Globe className="h-8 w-8 text-[#ff002a] mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">Global Reach</h4>
                  <p className="text-gray-600">International trading capabilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
